import {
  withStyles,
  createStyles,
  Theme,
  TableCell as MaterialTableCell,
  TableHead as MaterialTableHead,
  TableRow as MaterialTableRow,
  TableSortLabel as MaterialTableSortLabel,
} from "@material-ui/core";

import type { Order, PossibleDataKeys, ColumnConfig } from "./types";

interface TableHeadProps {
  config: ColumnConfig[];
  order: Order;
  orderBy: string;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: PossibleDataKeys
  ) => void;
}

const TableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(MaterialTableCell);

function TableHead({ config, order, orderBy, onRequestSort }: TableHeadProps) {
  const createSortHandler = (property: PossibleDataKeys) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <MaterialTableHead>
      <MaterialTableRow>
        {config.map(({ field, fieldName, align }) => (
          <TableCell
            key={field}
            align={align}
            sortDirection={orderBy === field ? order : false}
          >
            <MaterialTableSortLabel
              active={orderBy === field}
              direction={orderBy === field ? order : "asc"}
              onClick={createSortHandler(field)}
            >
              {fieldName}
            </MaterialTableSortLabel>
          </TableCell>
        ))}
      </MaterialTableRow>
    </MaterialTableHead>
  );
}

export { TableHead };
