import { createContext, useContext, useState, PropsWithChildren } from "react";

import { LayoutStore } from "./application-layout-store";

const LayoutContext = createContext<LayoutStore>({} as LayoutStore);

const { Provider } = LayoutContext;

function LayoutProvider({ children }: PropsWithChildren<{}>) {
  const [store] = useState(() => new LayoutStore());

  return <Provider value={store}>{children}</Provider>;
}

function useApplicationLayout() {
  return useContext(LayoutContext);
}

export { LayoutProvider, useApplicationLayout };
