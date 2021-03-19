import { useRef } from "react";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  Drawer as MaterialDrawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { useOnClickOutside } from "../../hooks";
import { useApplicationLayout } from "./application-layout-context";
import { navigationConfig } from "./navigation-config";

import { DRAWER_WIDTH } from "./application-layout-constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: DRAWER_WIDTH,
    },
    drawerHeader: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      justifyContent: "flex-end",
    },
  })
);

function DrawerBase() {
  const classes = useStyles();
  const drawerRef = useRef<HTMLElement>();
  const { pathname } = useLocation();
  const { isDrawerOpen, toggleDrawer } = useApplicationLayout();

  useOnClickOutside(drawerRef, () => {
    if (isDrawerOpen) {
      toggleDrawer();
    }
  });

  return (
    <MaterialDrawer
      ref={drawerRef}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {navigationConfig.map(({ path, label, icon }) => {
          const selected = pathname === `/${path}`;

          return (
            <ListItem
              button
              key={label}
              component={Link}
              to={path}
              selected={selected}
              onClick={toggleDrawer}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          );
        })}
      </List>
    </MaterialDrawer>
  );
}

const Drawer = observer(DrawerBase);

export { Drawer };
