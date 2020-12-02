import React from "react";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { render } from "react-dom";

const httpLink = createHttpLink({ uri: "http://localhost:5000" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function Index() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
