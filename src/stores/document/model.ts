import { nanoid } from "nanoid";

import type { DocumentDTO, DocumentType } from "./types";

class Document {
  id: string;
  name: string;
  type: DocumentType;

  constructor({ name, type }: DocumentDTO) {
    this.id = nanoid();

    this.name = name;
    this.type = type;
  }
}

export { Document };
