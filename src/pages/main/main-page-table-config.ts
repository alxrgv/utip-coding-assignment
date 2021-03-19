import type { ColumnConfig } from "./types";

const tableHeadConfig: ColumnConfig[] = [
  {
    field: "email",
    fieldName: "Email",
    align: "left",
  },
  { field: "text", fieldName: "Комментарий", align: "center" },
  { field: "country", fieldName: "Страна", align: "right" },
];

export { tableHeadConfig };
