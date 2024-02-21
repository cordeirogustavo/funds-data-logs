import { Route, Navigate } from 'react-router-dom';
import { hasPermission } from '../utils/hasPermission';

interface PrivateRouteProps {
  element: () => JSX.Element;
  path: string;
  scope: string[];
}

export function PrivateRoute({
  element: Component,
  path,
  scope,
  ...rest
}: PrivateRouteProps) {
  return (
    <Route path={path}>
      {hasPermission(scope) ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/dashboard" />
      )}
    </Route>
  );
}
