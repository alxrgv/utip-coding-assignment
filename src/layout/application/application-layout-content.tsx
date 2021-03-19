import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

import type { PropsWithChildren } from "react";

import { DRAWER_WIDTH } from "./application-layout-constants";
import { useApplicationLayout } from "./application-layout-context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transform: `translateX(0px)`,
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create("transform", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      transform: `translateX(${DRAWER_WIDTH}px)`,
    },
  })
);

const pageTransitionVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: 100,
    opacity: 0,
  },
};

function ContentBase({ children }: PropsWithChildren<{}>) {
  const classes = useStyles();
  const { isDrawerOpen } = useApplicationLayout();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: isDrawerOpen,
      })}
    >
      <div className={classes.drawerHeader} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageTransitionVariants}
      >
        {children}
      </motion.div>
    </main>
  );
}

const Content = observer(ContentBase);

export { Content };
