import { observer } from "mobx-react-lite";
import { useDocumentStore } from "../../stores";

import { EmptyData } from "../../components";

import { DocumentsPageList } from "./documents-page-list";

function DocumentsPageContentBase() {
  const { documents } = useDocumentStore();

  if (documents.length === 0) {
    return <EmptyData />;
  }

  return <DocumentsPageList />;
}

const DocumentsPageContent = observer(DocumentsPageContentBase);

export { DocumentsPageContent };
