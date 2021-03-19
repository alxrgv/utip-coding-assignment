import { FunctionComponent, ComponentClass } from "react";
import { Route, RouteProps } from "react-router-dom";

import { ApplicationLayout } from "./application-layout";

interface DefaultLayoutProps extends RouteProps {
  component: FunctionComponent | ComponentClass;
}

function ApplicationLayoutRoute({
  component: Component,
  ...rest
}: DefaultLayoutProps) {
  return (
    <Route
      {...rest}
      render={() => (
        <ApplicationLayout>
          <Component />
        </ApplicationLayout>
      )}
    />
  );
}

export { ApplicationLayoutRoute };
