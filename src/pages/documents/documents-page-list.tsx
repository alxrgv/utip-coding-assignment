import { useState } from "react";
import { observer } from "mobx-react-lite";
import { AnimatePresence, motion } from "framer-motion";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useToggle } from "../../hooks";
import { useDocumentStore, Document } from "../../stores";

import { DocumentTypeIcon } from "./document-type-icon";
import { RemoveDialog } from "./documents-page-remove-dialog";

const fadeOutSlideAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

function DocumentsPageListBase() {
  const [removingDocument, setRemovingDocument] = useState<Document | null>(
    null
  );
  const [isDialogOpen, toggleDialog] = useToggle(false);

  const { documents, remove } = useDocumentStore();

  return (
    <>
      <List role="list">
        <AnimatePresence>
          {documents.map((doc) => {
            const { name, type, id } = doc;

            return (
              <ListItem
                key={id}
                component={motion.div}
                {...fadeOutSlideAnimation}
              >
                <ListItemAvatar>
                  <Avatar>
                    <DocumentTypeIcon type={type} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
                <ListItemSecondaryAction>
                  <IconButton
                    color="inherit"
                    component={motion.button}
                    onClick={() => {
                      setRemovingDocument(doc);
                      toggleDialog();
                    }}
                    {...fadeOutSlideAnimation}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </AnimatePresence>
      </List>
      <RemoveDialog
        open={isDialogOpen}
        document={removingDocument}
        onAgree={() => {
          remove(removingDocument!.id);
          toggleDialog();
        }}
        onDisagree={() => {
          toggleDialog();
        }}
      />
    </>
  );
}

const DocumentsPageList = observer(DocumentsPageListBase);

export { DocumentsPageList };
