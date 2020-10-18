import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Link as RouterLink, Routes, useMatch } from "react-router-dom";

import { useAuth } from "./utils/auth-context";

function FullPageErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function ErrorFallback({ error }) {
  return <div>{JSON.stringify(error)}</div>;
}

function NavLink(props) {
  const match = useMatch(props.to);
  return (
    <RouterLink
      style={
        match
          ? {
              borderLeft: `5px solid wheat`,
              background: "wheat",
              ":hover": {
                background: "wheat",
              },
            }
          : null
      }
      {...props}
    />
  );
}

function Nav(params) {
  return (
    <nav>
      <NavLink to="/list">Reading List</NavLink>
      <NavLink to="/finished">Finished Books</NavLink>
      <NavLink to="/discover">Discover</NavLink>
    </nav>
  );
}

const ReadingListScreen = () => {
  return <div>ReadingListScreen</div>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/list" element={<ReadingListScreen />} />
    </Routes>
  );
}

const AuthenticatedApp = () => {
  const { user, logout } = useAuth();

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <div>
        {user.username}
        <button onClick={logout}>Logout</button>
      </div>
      <div>
        <Nav />
        <main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRoutes />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default AuthenticatedApp;
