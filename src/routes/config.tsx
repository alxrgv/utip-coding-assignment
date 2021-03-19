import { Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ApplicationLayoutRoute } from "../layout";

import { MainPage, CommentPage, DocumentsPage } from "../pages";

function Routes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch key={location.pathname} location={location}>
        <ApplicationLayoutRoute path="/main" component={MainPage} />
        <ApplicationLayoutRoute path="/documents" component={DocumentsPage} />
        <ApplicationLayoutRoute path="/new-comment" component={CommentPage} />

        <Redirect to="/main" />
      </Switch>
    </AnimatePresence>
  );
}

export { Routes };
