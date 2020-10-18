import React from "react";
import { useAuth } from "./utils/auth-context";
import { useAsync } from "./utils/useAsync";

function LoginForm({ onSubmit, submitButton }) {
  const { isLoading, isError, error, run } = useAsync();

  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    run(
      onSubmit({
        username: username.value,
        password: password.value,
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </fieldset>
      <div>
        {React.cloneElement(
          submitButton,
          { type: "submit" },
          ...(Array.isArray(submitButton.props.children)
            ? submitButton.props.children
            : [submitButton.props.children]),
          isLoading ? <div>Spinny!</div> : null
        )}
      </div>
      {isError ? <div>Error {JSON.stringify(error)}</div> : null}
    </form>
  );
}

function UnauthenticatedApp() {
  const {
    login,
    // register
  } = useAuth();
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1>Bookshelf</h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridGap: "0.75rem",
        }}
      >
        <LoginForm onSubmit={login} submitButton={<button>Login</button>} />
        {/* <LoginForm
          onSubmit={register}
          submitButton={<button>Register</button>}
        /> */}
      </div>
    </div>
  );
}

export default UnauthenticatedApp;
