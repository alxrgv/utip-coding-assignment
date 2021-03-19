import { makeStyles, Theme, createStyles, Fab } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "fixed",
      zIndex: 10000,
      right: theme.spacing(2),
      top: theme.spacing(0.5),
    },
  })
);

function GithubLink() {
  const classes = useStyles();

  return (
    <Fab
      className={classes.fab}
      color="secondary"
      component="a"
      target="_blank"
      href="https://github.com/alxrgv/utip-coding-assignment"
    >
      <GitHubIcon />
    </Fab>
  );
}

export { GithubLink };
