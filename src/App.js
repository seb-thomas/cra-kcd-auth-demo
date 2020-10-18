import AuthenticatedApp from "./AuthenticatedApp";
import React from "react";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { useAuth } from "./utils/auth-context";

const App = () => {
  console.log("<App> - useAuth() - <AuthContext> : ", useAuth());
  const { user } = useAuth();

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

/*
 * Inputs and button to login
 * Thing to send login data backend
 * Something to send to the right page
 * Something to return y/n, statuses, loading etc
 * API fetchy thing
 * Way to store token
 * Attach token to reqs
 */

export default App;
