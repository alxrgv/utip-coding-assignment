import { Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";

import { Document } from "../../stores";

interface RemoveDialogProps {
  open: boolean;
  document: Document | null;

  onAgree?: () => void;
  onDisagree?: () => void;
}

function RemoveDialog({
  open,
  document,
  onAgree,
  onDisagree,
}: RemoveDialogProps) {
  if (document == null) {
    return null;
  }

  const { name } = document;

  return (
    <Dialog open={open}>
      <DialogTitle>Вы уверены что хотите удалить документ {name}</DialogTitle>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={() => onAgree?.()}>
          Удалить
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onDisagree?.()}
          autoFocus
        >
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export { RemoveDialog };
