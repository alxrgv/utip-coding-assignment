import { observer } from "mobx-react-lite";

import { useCommentStore } from "../../stores";

import { EmptyData } from "../../components";
import { MainPageTable } from "./main-page-table";

function MainPageContentBase() {
  const { comments } = useCommentStore();

  if (comments.length === 0) {
    return <EmptyData />;
  }

  return <MainPageTable />;
}

const MainPageContent = observer(MainPageContentBase);

export { MainPageContent };
