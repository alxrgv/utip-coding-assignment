import { createContext, useContext } from "react";

import { CommentStore } from "./comment";
import { DocumentStore } from "./document";

interface StoreContextInterface {
  commentStore: CommentStore;
  documentStore: DocumentStore;
}

const StoreContext = createContext<StoreContextInterface>(
  {} as StoreContextInterface
);

function useCommentStore() {
  const { commentStore } = useContext(StoreContext);
  return commentStore;
}

function useDocumentStore() {
  const { documentStore } = useContext(StoreContext);
  return documentStore;
}

export { StoreContext, useCommentStore, useDocumentStore };
