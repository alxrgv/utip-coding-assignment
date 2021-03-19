export type DocumentType = "application/pdf" | "image/jpeg";

export interface DocumentDTO {
  name: string;
  type: DocumentType;
}
