import { makeAutoObservable } from "mobx";

import { Document } from "./model";

import { DocumentDTO } from "./types";

class DocumentStore {
  public documents: Array<Document> = [];

  constructor() {
    makeAutoObservable(this);
  }

  public add = (dto: DocumentDTO) => {
    const document = new Document(dto);

    this.documents.push(document);
  };

  public clear = () => {
    this.documents = [];
  };

  public remove = (id: string) => {
    this.documents = this.documents.filter((doc) => doc.id !== id);
  };
}

export { DocumentStore };
