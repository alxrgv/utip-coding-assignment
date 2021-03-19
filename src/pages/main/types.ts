import type { TableCellProps } from "@material-ui/core";
import type { CommentDTO } from "../../stores";

export interface ColumnConfig {
  field: PossibleDataKeys;
  fieldName: string;
  align: TableCellProps["align"];
}

export type Order = "asc" | "desc";
export type PossibleDataKeys = keyof CommentDTO;
