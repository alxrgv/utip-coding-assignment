import { useMemo, PropsWithChildren } from "react";

import { StoreContext } from "./store-context";

import { CommentStore } from "./comment";
import { DocumentStore } from "./document";

const { Provider } = StoreContext;

function StoreProvider({ children }: PropsWithChildren<{}>) {
  const stores = useMemo(
    () => ({
      commentStore: new CommentStore(),
      documentStore: new DocumentStore(),
    }),
    []
  );

  return <Provider value={stores}>{children}</Provider>;
}

export { StoreProvider };
