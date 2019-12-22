import * as React from "react";

import "./table-style.scss";

const angleDown: JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" /></svg>;
const angleUp: JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M136.5 185.1l116 117.8c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L128 224.7 27.6 326.9c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l116-117.8c4.7-4.6 12.3-4.6 17 .1z" /></svg>;
const angleRightIcon: JSX.Element = <svg name="angle-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" /></svg>;
const ellipsis: JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M192 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm88-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-240 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z" /></svg>;

interface TableProps {
    columns: Array<Column>;
    data: Array<object>;

    // item selection
    setSelectAllValue?: boolean;
    // sorting
    sortable?: boolean;

    // pagination
    usePagination?: boolean;
    offsett?: number;
    currentpage?: number;

    // search and filter
    searchInColumns?: Array<string>;
    searchText?: string;
    triggerSearchOn?: "Change" | "Submit";
    searchTriggered?: boolean;

    // enable row selection
    useRowSelection?: boolean;

    footer?: React.ReactNode;

    onRowSelection?: (e: React.ChangeEvent<HTMLInputElement>, selectedRows: Array<TableRow>) => void;
    onRowExpanded?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, expandedRowList: Array<TableRow>) => void;
    onSort?: (rows: Array<TableRow>, columns: Array<Column>) => void;
    onSearch?: (rows: Array<TableRow>) => void;
}

export interface Column {
    Header: string;
    accessor: string;
    canSort?: boolean;
    canGroupBy?: boolean;
    canSearch?: boolean;
    blackList?: Array<string>;
}

interface TableHead extends Column {
    isGrouped?: boolean;
    isSorted?: boolean;
    isSortedDesc?: boolean;
}

interface Cell {
    id: string | number;
    accessor: string;
    value: string | number | boolean;
}

export interface TableRow {
    rowIndex: number;
    cells: Array<Cell>;
    selected?: boolean;
    subRows: Array<TableRow>;
    expanded?: boolean;
    rowContentDetail?: React.ReactNode;
}

function generateRandomId(seed: string): string {
    return seed + String((Math.random() * 1000) + (new Date()).getTime());
}

export const enum sortDirectionTypes {
    Ascending = "ASC",
    Descending = "DESC"
}

function sumCols(colsLength: number, useSelection?: boolean, useShowActionColumn?: boolean, useGroupBy?: boolean) {
    let sum = colsLength;
    if (useSelection || useGroupBy) {
        if (useSelection) {
            sum = sum + 1;
        }

        if (useGroupBy) {
            sum = sum + 1;
        }
        if (useShowActionColumn) {
            sum = sum + 1;
        }
    }

    return sum;
}

function sortArray(items: Array<TableRow> = [], columnName: string, sortDirection: sortDirectionTypes): Array<TableRow> {
    const sortedItems: Array<any> = [...items].sort((firstItem: TableRow, secondItem: TableRow) => {
        let result: number = 0;
        if (sortDirection === sortDirectionTypes.Ascending) {
            if (isNaN(secondItem[columnName]) && isNaN(firstItem[columnName])) {
                result = String(firstItem[columnName]).localeCompare(String(secondItem[columnName]), ["sw", "en"], { sensitivity: "base", ignorePunctuation: true });
            } else {
                result = (firstItem[columnName] - secondItem[columnName]);
            }
        } else {
            if (isNaN(secondItem[columnName]) && isNaN(firstItem[columnName])) {
                result = String(secondItem[columnName]).localeCompare(String(firstItem[columnName]), ["sw", "en"], { sensitivity: "base", ignorePunctuation: true });
            } else {
                result = (secondItem[columnName] - firstItem[columnName]);
            }
        }
        return result;

    });
    return sortedItems;
}

function searchTextInArray(items: Array<TableRow>, keyword: string, searchFields: Array<string>): Array<TableRow> {
    return [...items].filter((row: TableRow) => {
        if (keyword.trim().length === 0 || searchFields.length === 0) {
            return true;
        }

        return (
            searchFields.some((searchColumn: string) => {
                let result: boolean = false;
                const searchField: string = searchColumn;
                const regEx = new RegExp(keyword, "gi");
                if (row[searchField] === null || row[searchField] === undefined) {
                    result = false;
                } else if (typeof row[searchField] === "string") {
                    result = row[searchField].search(regEx) > -1;
                } else if (typeof row[searchField] === "number") {
                    result = String(row[searchField]).search(regEx) !== -1;
                }
                return result;
            })
        );
    });
}

interface ActionColumnProps {
    onPrimaryButtonClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ActionColumn: React.FunctionComponent<ActionColumnProps> = (props: ActionColumnProps) => {
    return (
        <div className="action-column">
            <button
                id="btnPrimaryAction"
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={props.onPrimaryButtonClick}>Small
            </button>
            <div className="ellipsis-dropdown-holder">
                <div className="icon-holder">
                    {ellipsis}
                </div>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
    )
}

interface TableUIProps {
    columns: Array<TableHead>;
    rows: Array<TableRow>;
    sortable: boolean;
    useRowSelection: boolean;
    allRowsAreSelected?: boolean;

    footer: React.ReactNode;
    useShowActionColumn: boolean;

    onItemSelected?: (e: React.ChangeEvent<HTMLInputElement>, row: TableRow, type: "row" | "subRow", rowIndex?: number) => void;
    onSort?: (accessor: string, sortDirection: sortDirectionTypes) => void;
    onAllItemsSelected?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRowExpanded?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, row: TableRow) => void;
}
export const TableUI: React.FunctionComponent<TableUIProps> = React.memo((props: TableUIProps): React.ReactElement<void> => {
    const checkAllRandomIds = generateRandomId("chk-all");
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        {props.useRowSelection &&
                            <th>
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={checkAllRandomIds}
                                        name="chkCheckAll"
                                        checked={props.allRowsAreSelected}
                                        onChange={props.onAllItemsSelected}
                                    />
                                    <label className="custom-control-label" htmlFor={checkAllRandomIds} />
                                </div>
                            </th>
                        }
                        {props.columns.map((header: TableHead, index: number) => (
                            <th
                                key={index}
                                onClick={(e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
                                    if (header.canSort) {
                                        props.onSort(header.accessor, header.isSortedDesc ? sortDirectionTypes.Ascending : sortDirectionTypes.Descending);
                                    } else {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                {header.Header}
                                {(props.sortable && header.canSort) &&
                                    <div
                                        className="icon-holder"
                                        id={header.accessor}
                                        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                                            if (header.canSort) {
                                                props.onSort(header.accessor, header.isSortedDesc ? sortDirectionTypes.Ascending : sortDirectionTypes.Descending);
                                            } else {
                                                e.preventDefault();
                                            }
                                        }
                                        }
                                    >
                                        <div className={"angle-up" + (header.isSorted && !header.isSortedDesc ? " active" : "")}>
                                            {angleUp}
                                        </div>
                                        <div className={"angle-down" + (header.isSorted && header.isSortedDesc ? " active" : "")}>
                                            {angleDown}
                                        </div>
                                    </div>
                                }
                            </th>
                        ))
                        }
                        {props.useShowActionColumn && <th></th>}
                    </tr>
                </thead>
                <tbody>
                    {props.rows.map((row: TableRow, i: number) => {
                        const checkRowRandomIds = generateRandomId("chk-");
                        return (
                            <React.Fragment key={row.rowIndex}>
                                <tr>
                                    {props.useRowSelection &&
                                        <td className="row-selections-column">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={checkRowRandomIds}
                                                    checked={row.selected}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { props.onItemSelected(e, row, "row"); }}
                                                    name={`chk` + row.rowIndex}
                                                />
                                                <label className="custom-control-label" htmlFor={checkRowRandomIds} />
                                            </div>
                                            {row.subRows.length > 0 &&
                                                <div className="icon-holder" onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { props.onRowExpanded(e, row); }}>
                                                    {row.expanded ? angleDown : angleRightIcon}
                                                </div>
                                            }
                                        </td>
                                    }
                                    {row.cells.map((cell: Cell, cellIndex: number) => {
                                        return <td key={`cell-${cellIndex}`}>
                                            {cell.value}
                                        </td>;
                                    })}
                                    {props.useShowActionColumn &&
                                        <td>
                                            <ActionColumn onPrimaryButtonClick={null} />
                                        </td>
                                    }
                                </tr>

                                {row.subRows.map((subRow: TableRow) => {
                                    const checkSubRowRandomIds = generateRandomId("sub-chk-");
                                    return (
                                        <React.Fragment  key={`sub-row-${subRow.rowIndex}`}>
                                            <tr
                                                className={"row-details" + (row.expanded ? " expanded" : "")}
                                                style={{ display: row.expanded ? 'table-row' : 'none' }}
                                            >
                                                {props.useRowSelection &&
                                                    <td className="row-selections-column">
                                                        <div className="custom-control custom-checkbox" style={{ marginLeft: '20px' }}>
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id={checkSubRowRandomIds}
                                                                checked={subRow.selected}
                                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                                    props.onItemSelected(e, subRow, "subRow", row.rowIndex);
                                                                }}
                                                                name={`chk` + row.rowIndex}
                                                            />
                                                            <label className="custom-control-label" htmlFor={checkSubRowRandomIds} />
                                                        </div>
                                                    </td>
                                                }
                                                {subRow.cells.map((subRowCell: Cell, subRowCellIndex) => {
                                                    return (
                                                        <td key={'subRowCell-' + subRowCellIndex}>
                                                            {subRowCell.value}
                                                        </td>
                                                    )
                                                })}
                                                {props.useShowActionColumn && <td>
                                                    <ActionColumn onPrimaryButtonClick={null} />
                                                </td>}
                                            </tr>
                                            {(subRow.rowContentDetail && subRow.expanded) &&
                                                <tr>
                                                    <td colSpan={sumCols(props.columns.length, props.useRowSelection, true, false)}>
                                                        <div style={{ marginLeft: '40px' }}>
                                                            {subRow.rowContentDetail}
                                                        </div>

                                                    </td>
                                                </tr>
                                            }
                                        </React.Fragment>
                                    )
                                })}
                                {(row.rowContentDetail && row.expanded) &&
                                    <tr>
                                        <td colSpan={sumCols(props.columns.length, props.useRowSelection, true, false)}>
                                            <div style={{ marginLeft: '20px' }}>
                                                {row.rowContentDetail}
                                            </div>

                                        </td>
                                    </tr>
                                }
                            </React.Fragment>
                        );
                    }
                    )}
                </tbody>
                <tfoot>
                    {props.footer &&
                        <tr>
                            <td colSpan={sumCols(props.columns.length, props.useRowSelection, true, false)}>
                                {props.footer}
                            </td>
                        </tr>
                    }
                </tfoot>
            </table>
        </div>
    );

});

export const Table: React.FunctionComponent<TableProps> = React.memo((props: TableProps): React.ReactElement<void> => {
    const [tableRows, setTableRows] = React.useState<Array<TableRow>>([]);
    const [tableRowsImage, setTableRowsImage] = React.useState<Array<TableRow>>([]);
    const [currentTableRows, setCurrentTableRows] = React.useState<Array<TableRow>>([]);
    const [tableColumns, setTableColumn] = React.useState<Array<TableHead>>([]);
    const [allItemsChecked, setAllRowsChecked] = React.useState<boolean>(false);

    // events -------------------------------------------------------------------------------------
    const onItemSelected = (e: React.ChangeEvent<HTMLInputElement>, selectedRow: TableRow, type: "subRow" | "row", rowIndex?: number) => {
        const updatedOriginalRows = tableRows.map((originalRow: TableRow) => {
            let updatedSubrows: Array<TableRow> = originalRow.subRows;
            if (type === "row") {
                if (originalRow.rowIndex === selectedRow.rowIndex) {
                    updatedSubrows = updatedSubrows.map((subRow: TableRow) => ({ ...subRow, selected: e.target.checked }));
                    return { ...originalRow, selected: e.target.checked, subRows: updatedSubrows };
                }
            } else if (type === "subRow") {
                if (originalRow.rowIndex === rowIndex) {
                    updatedSubrows = originalRow.subRows.map((originalSubrow: TableRow) => {
                        if (originalSubrow.rowIndex === selectedRow.rowIndex) {
                            return { ...originalSubrow, selected: e.target.checked };
                        }
                        return originalSubrow;
                    });
                    return { ...originalRow, subRows: updatedSubrows, selected: false };
                }
            }

            return { ...originalRow, subRows: updatedSubrows };
        });

        const updatedRows: Array<TableRow> = currentTableRows.map((row: TableRow, index) => {
            if (selectedRow.rowIndex === row.rowIndex) {
                return (
                    { ...row, selected: e.target.checked }
                );
            }
            return row;
        });

        const selectedRowList: Array<TableRow> = updatedOriginalRows.filter((item: TableRow) => item.selected);

        setCurrentTableRows(updatedRows);
        setTableRows(updatedOriginalRows);
        setTableRowsImage(updatedOriginalRows);
        props.onRowSelection(e, selectedRowList);
    };

    const onAllItemsSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedOriginalRows = tableRows.map((originalRow: TableRow) => {
            const updatedSubRows: Array<TableRow> = originalRow.subRows.map((subRow: TableRow) => {
                return { ...subRow, selected: e.target.checked }
            });
            return (
                { ...originalRow, selected: e.target.checked, subRows: updatedSubRows }
            );
        });

        const updatedRows: Array<TableRow> = currentTableRows.map((row: TableRow) => {
            const updatedSubRows: Array<TableRow> = row.subRows.map((subRow: TableRow) => {
                return { ...subRow, selected: e.target.checked }
            });
            return (
                { ...row, selected: e.target.checked, subRows: updatedSubRows }
            );
        });

        setCurrentTableRows(updatedRows);
        setTableRows(updatedOriginalRows);
        setTableRowsImage(updatedOriginalRows);
        props.onRowSelection(e, updatedRows);
    };

    const onSortItems = async (accessor, sortDirection: sortDirectionTypes) => {
        const updatedOriginalRows = await sortArray(tableRows, accessor, sortDirection);

        const updatedColumns: Array<TableHead> = tableColumns.map((column: TableHead) => {
            if (column.accessor === accessor) {
                return {
                    ...column,
                    isSorted: true,
                    isSortedDesc: sortDirection === sortDirectionTypes.Descending ? true : false
                };
            }
            return { ...column, isSorted: false, isSortedDesc: false };
        });

        setTableRows(updatedOriginalRows);
        setTableRowsImage(updatedOriginalRows);
        setTableColumn(updatedColumns);
        props.onSort(updatedOriginalRows, updatedColumns);
    };

    const rowExpanded = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, row: TableRow) => {
        const updatedOriginalRows = tableRows.map((originalRow: TableRow) => {
            if (originalRow.rowIndex === row.rowIndex) {
                return { ...originalRow, expanded: !originalRow.expanded };
            }

            return originalRow;
        });

        const updatedRows: Array<TableRow> = currentTableRows.map((currentRow: TableRow, index) => {
            if (currentRow.rowIndex === row.rowIndex) {
                return (
                    { ...currentRow, expanded: !currentRow.expanded }
                );
            }
            return currentRow;
        });

        const expandedRowList: Array<TableRow> = updatedOriginalRows.filter((item: TableRow) => item.expanded);

        setCurrentTableRows(updatedRows);
        setTableRows(updatedOriginalRows);
        setTableRowsImage(updatedOriginalRows);
        props.onRowExpanded(e, expandedRowList);
    };
    // functions -----------------------------------------------------------------------------
    function getRows(rows: Array<TableRow>) {
        const updatedRows: Array<TableRow> = rows.map((row: TableRow, index: number) => {
            const updatedCells: Array<Cell> = Object.keys(row).filter((key: string) => {
                return key !== "rowContentDetail" && key !== "subRows";
            }).map((accessor: string): Cell => {
                return {
                    id: accessor,
                    accessor,
                    value: row[accessor]
                };
            });

            return (
                {
                    ...row,
                    rowIndex: index,
                    cells: updatedCells,
                    selected: false,
                    subRows: row.subRows,
                    collapsed: false
                }
            );
        });

        return updatedRows;
    }

    const setDefaultTableRows = () => {
        const updatedRows: Array<TableRow> = props.data.map((row: TableRow, index: number) => {
            const updatedCells: Array<Cell> = Object.keys(row).filter((key: string) => {
                return key !== "rowContentDetail" && key !== "subRows";
            }).map((accessor: string): Cell => {
                return {
                    id: accessor,
                    accessor,
                    value: row[accessor]
                };
            });

            return (
                {
                    ...row,
                    rowIndex: index,
                    cells: updatedCells,
                    selected: false,
                    subRows: getRows(row.subRows),
                    collapsed: false
                }
            );
        });

        if (props.usePagination) {
            const start: number = (props.currentpage - 1) * props.offsett;
            const end: number = (props.offsett * (props.currentpage));
            const currentPageRows = updatedRows.slice(start, end);
            setCurrentTableRows(currentPageRows);
        } else {
            setCurrentTableRows(updatedRows);
        }
        setTableRows(updatedRows);
        setTableRowsImage(updatedRows);
    };

    const doPaginate = () => {
        if (props.usePagination && (tableRowsImage.length > 0)) {
            // pagination start from 1 hence the need fro deducting 1
            const start: number = (props.currentpage - 1) * props.offsett;
            const end: number = (props.offsett * (props.currentpage));

            const currentPage: Array<TableRow> = tableRows.slice(start, end);
            setCurrentTableRows(currentPage);
        } else {
            setDefaultTableRows();
        }
    };

    const doSearch = () => {
        const searchResult: Array<TableRow> = searchTextInArray(tableRowsImage, props.searchText, props.searchInColumns);
        setTableRows(searchResult);
        props.onSearch && props.onSearch(searchResult);
    };
    // useEffect

    React.useEffect(() => {
        if (props.useRowSelection) {
            const notAllsAreRowsSelected = tableRows.some((row: TableRow) => !row.selected);

            if (notAllsAreRowsSelected) {
                setAllRowsChecked(false);
            } else {
                setAllRowsChecked(true);
            }
        }
    }, [currentTableRows]);

    React.useEffect(() => {
        doPaginate();
    }, [tableRows]);

    React.useEffect(() => {
        if (props.triggerSearchOn === "Change") {
            doSearch();
        }
    }, [props.searchInColumns, props.searchText]);

    React.useEffect(() => {
        if (props.triggerSearchOn === "Submit") {
            doSearch();
        }
    }, [props.searchTriggered]);

    React.useEffect(() => {
        const updatedColumns: Array<TableHead> = props.columns.map((column: TableHead) => {
            return {
                ...column,
                isGrouped: false,
                isSorted: false,
                canSort: (column.canSort !== undefined) ? column.canSort : (props.sortable ? true : false),
                isSortedDesc: false
            };
        });

        setTableColumn(updatedColumns);

    }, [props.columns]);

    React.useEffect(() => {
        setDefaultTableRows();
    }, [props.data]);

    React.useEffect(() => {
        doPaginate();
    }, [props.offsett, props.currentpage]);

    return (
        <div>
            <TableUI
                columns={tableColumns}
                rows={currentTableRows}
                footer={props.footer}
                onSort={onSortItems}
                sortable={props.sortable}
                useRowSelection={props.useRowSelection}
                allRowsAreSelected={allItemsChecked}
                onItemSelected={onItemSelected}
                onAllItemsSelected={onAllItemsSelected}
                onRowExpanded={rowExpanded}
                useShowActionColumn={true}
            />
        </div>

    );
});
