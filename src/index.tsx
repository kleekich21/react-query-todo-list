import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryErrorHandler = (error: Error) => {
  console.log("ERROR!!!!!!!!!");
  toast.error(`${error.message}`, {});
};

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      throwOnError: true,
      onError: queryErrorHandler,
    },
    queries: {
      throwOnError: true,
    },
  },
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
