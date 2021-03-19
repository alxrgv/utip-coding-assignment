import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import CommentIcon from "@material-ui/icons/Comment";

import { RoutePath } from "../../routes";

interface NavigationConfigItem {
  path: RoutePath;
  label: string;
  icon: JSX.Element;
}

const navigationConfig: NavigationConfigItem[] = [
  {
    path: "main",
    label: "Главная",
    icon: <HomeIcon />,
  },
  {
    path: "documents",
    label: "Документы",
    icon: <DescriptionIcon />,
  },
  {
    path: "new-comment",
    label: "Комментарии",
    icon: <CommentIcon />,
  },
];

export { navigationConfig };
