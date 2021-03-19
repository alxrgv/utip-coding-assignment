import { useState } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  ListItemIcon,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useCountryList } from "../../api";
import { useCommentStore } from "../../stores";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      alignItems: "flex-start",
    },
    submitButton: {
      margin: theme.spacing(3, 0, 2),
    },
    flag: {
      width: 24,
      height: 12,
    },
  })
);

interface CommentFormValues {
  email: string;
  country: string;
  text: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required("Обязательное поле"),
  country: yup.string().required("Обязательное поле"),
  text: yup.string().required("Обязательное поле"),
});

function CommentPageForm() {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);

  const { push } = useHistory();
  const { data: countries } = useCountryList();
  const { control, handleSubmit, register } = useForm<CommentFormValues>({
    defaultValues: {
      email: "",
      country: "",
      text: "",
    },
    resolver: yupResolver(schema),
  });
  const { addComment } = useCommentStore();

  if (!countries) return null;

  const onSubmit = (data: CommentFormValues) => {
    addComment(data);

    if (!loading) {
      setLoading(true);

      setTimeout(() => {
        push("/main");
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            inputRef={register}
            variant="outlined"
            required
            fullWidth
            label="Введите email"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Выберите страну</InputLabel>
            <Controller
              as={
                <Select label="Выберите страну" required>
                  {countries.map(({ nativeName, flag }) => (
                    <MenuItem key={nativeName} value={nativeName}>
                      <ListItemIcon>
                        <img
                          className={classes.flag}
                          src={flag}
                          alt={`${nativeName}`}
                        />
                      </ListItemIcon>
                      {nativeName}
                    </MenuItem>
                  ))}
                </Select>
              }
              name="country"
              control={control}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            inputRef={register}
            fullWidth
            label="Комментарий"
            multiline
            rows={4}
            name="text"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            {loading ? <CircularProgress color="secondary" /> : "Опубликовать"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export { CommentPageForm };
