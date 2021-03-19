import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
interface DocumentsPageUploadNotificationProps {
  open: boolean;
  handleClose: (event?: React.SyntheticEvent, reason?: string) => void;
}

function DocumentsPageUploadNotification({
  open,
  handleClose,
}: DocumentsPageUploadNotificationProps) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success">
        Загружено
      </Alert>
    </Snackbar>
  );
}

export { DocumentsPageUploadNotification };
