import type { DocumentType } from "./types";

const allowedMIMETypes = ["application/pdf", "image/jpeg"];

export function isAllowedDocumentType(type: string): type is DocumentType {
  return allowedMIMETypes.indexOf(type) !== -1;
}
