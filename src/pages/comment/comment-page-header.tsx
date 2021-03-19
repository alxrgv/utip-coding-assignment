import {
  createStyles,
  makeStyles,
  Theme,
  Avatar,
  Typography,
  Box,
} from "@material-ui/core";

import AddCommentIcon from "@material-ui/icons/AddComment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
  })
);

function CommentPageHeader() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar className={classes.avatar}>
        <AddCommentIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Новый комментарий
      </Typography>
    </Box>
  );
}

export { CommentPageHeader };
