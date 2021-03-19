import clsx from "clsx";
import { AnimateSharedLayout } from "framer-motion";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import type { PropsWithChildren } from "react";

import { GithubLink } from "./application-layout-github-fab-link";
import { Appbar } from "./application-layout-appbar";
import { Drawer } from "./application-layout-drawer";
import { Content } from "./application-layout-content";
import { LayoutProvider } from "./application-layout-context";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      overflowX: "hidden",
    },
  })
);

export function ApplicationLayout<P>({ children }: PropsWithChildren<P>) {
  const classes = useStyles();

  return (
    <LayoutProvider>
      <AnimateSharedLayout>
        <div className={clsx(classes.root)}>
          <Appbar />
          <Content>{children}</Content>
          <Drawer />
          <GithubLink />
        </div>
      </AnimateSharedLayout>
    </LayoutProvider>
  );
}
