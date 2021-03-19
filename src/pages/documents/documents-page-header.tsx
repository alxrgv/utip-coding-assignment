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

function DocumentsPageHeader() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">Документы</Typography>
    </Paper>
  );
}

export { DocumentsPageHeader };
