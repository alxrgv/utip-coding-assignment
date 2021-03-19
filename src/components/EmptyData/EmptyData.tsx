import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  })
);

function EmptyData() {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, height: 180 }}
    >
      <Typography variant="h5">Нет данных для отображения</Typography>
    </motion.div>
  );
}

export { EmptyData };
