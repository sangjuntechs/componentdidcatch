import React from "react";
import User from "./User";
import ErrorBoundary from "./errorBoundary";

function App() {
  /*const user = {
    id: 1,
    username: 'sangjun'
  }*/
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
