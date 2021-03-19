import { createStyles, makeStyles, Theme, Container } from "@material-ui/core";

import { CommentPageHeader } from "./comment-page-header";
import { CommentPageForm } from "./comment-page-form";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

function CommentPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <CommentPageHeader />
        <CommentPageForm />
      </div>
    </Container>
  );
}

export { CommentPage };
