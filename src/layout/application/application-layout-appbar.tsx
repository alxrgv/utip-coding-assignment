import clsx from "clsx";
import { observer } from "mobx-react-lite";
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { DRAWER_WIDTH } from "./application-layout-constants";
import { useApplicationLayout } from "./application-layout-context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transform: `translateX(0px)`,
      transition: theme.transitions.create(["transform"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      transform: `translateX(${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(["transform"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 0,
      marginRight: theme.spacing(2),
      transition: theme.transitions.create(["margin-left"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButtonShift: {
      marginLeft: -64,
      transition: theme.transitions.create(["margin-left"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  })
);

function AppbarBase() {
  const classes = useStyles();
  const { isDrawerOpen, toggleDrawer } = useApplicationLayout();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawerOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          className={clsx(classes.menuButton, {
            [classes.menuButtonShift]: isDrawerOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          UTIP Coding Assignment
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const Appbar = observer(AppbarBase);

export { Appbar };
