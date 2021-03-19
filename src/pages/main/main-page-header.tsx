import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      padding: theme.spacing(2),
    },
  })
);

function MainPageHeader() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Комментарии</Typography>
    </Paper>
  );
}

export { MainPageHeader };
