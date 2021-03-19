import { DocumentType } from "../../stores";

import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import ImageIcon from "@material-ui/icons/Image";

interface DocumentTypeIconProps {
  type: DocumentType;
}

function DocumentTypeIcon({ type }: DocumentTypeIconProps) {
  if (type === "application/pdf") return <PictureAsPdfIcon />;

  if (type === "image/jpeg") return <ImageIcon />;

  return null;
}

export { DocumentTypeIcon };
