import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import { useCommentStore } from "../../stores";

import { TableHead } from "./main-page-table-head";
import { getComparator, stableSort } from "./main-page-table-utilities";
import { tableHeadConfig } from "./main-page-table-config";

import type { Order, PossibleDataKeys } from "./types";

const DEFAULT_ORDER: Order = "asc";
const DEFAULT_ORDERBY_KEY: PossibleDataKeys = "email";
const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = 5;

export function MainPageTable() {
  const { comments } = useCommentStore();

  const [order, setOrder] = useState<Order>(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = useState<PossibleDataKeys>(DEFAULT_ORDERBY_KEY);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  const rows = useMemo(
    () =>
      stableSort(comments, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [comments, order, orderBy, page, rowsPerPage]
  );

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: PossibleDataKeys
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer>
      <Table>
        <TableHead
          config={tableHeadConfig}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow hover key={row.email}>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="center">{row.text}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
