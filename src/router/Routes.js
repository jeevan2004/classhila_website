import { Navigate, Route, Routes as MyRoutes } from "react-router";

import PublicLayout from "../Components/Layout/PublicLayout";
import { routes } from "./RoutePath";

const Routes = () => {
  return (
    <>
      <MyRoutes>
        <Route path="/" element={<PublicLayout />}>
          {routes.map((r) =>
            r.subRouting ? (
              <Route
                key={r.path}
                path={r.path}
                element={<r.element title={r.name || ""} />}
              >
                {r.subRoute.map((e) => (
                  <Route
                    path={e.path}
                    key={e.path}
                    element={<e.element title={e.name || ""} />}
                  />
                ))}
              </Route>
            ) : (
              <Route
                key={r.path}
                path={r.path}
                element={<r.element title={r.name || ""} />}
              />
            )
          )}
        </Route>
        {/* <Route path="/login" element={<Login />} /> */}
      </MyRoutes>
    </>
  );
};

export default Routes;
