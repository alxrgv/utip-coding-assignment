import { useRef, ChangeEvent } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Button,
  Toolbar,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import { useToggle } from "../../hooks";
import { useDocumentStore, isAllowedDocumentType } from "../../stores";
import { DocumentsPageUploadNotification } from "./documents-page-upload-notification";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      padding: theme.spacing(2, 2),
      justifyContent: "space-between",
    },
  })
);

function DocumentPageToolbar() {
  const classes = useStyles();

  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedFileNotificationOpened, toggleFileNotification] = useToggle(
    false
  );

  const { add: addDocument, clear: clearDocuments } = useDocumentStore();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    toggleFileNotification();
  };

  const handleUpload = ({
    target: { files },
  }: ChangeEvent<HTMLInputElement>) => {
    if (files != null) {
      for (let fileIdx = 0; fileIdx < files.length; fileIdx++) {
        const { name, type } = files[fileIdx];

        if (isAllowedDocumentType(type)) {
          addDocument({ name, type });
        }
      }

      if (!uploadedFileNotificationOpened) {
        toggleFileNotification();
      }

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <Toolbar className={classes.toolbar} variant="dense">
      <label>
        <input
          ref={inputRef}
          hidden
          multiple
          type="file"
          accept="image/jpeg,application/pdf"
          onChange={handleUpload}
        />
        <Button
          component="span"
          color="default"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Загрузить документ
        </Button>
      </label>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={clearDocuments}
      >
        Очистить список
      </Button>
      <DocumentsPageUploadNotification
        open={uploadedFileNotificationOpened}
        handleClose={handleClose}
      />
    </Toolbar>
  );
}

export { DocumentPageToolbar };
