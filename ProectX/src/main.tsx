import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App/App.tsx";
import { store } from "./context/context.tsx";
import ErrorPage from "./router/ErrorPage.tsx";
import { PageBali } from "./BlogPage/PageBali.tsx";
import { PageLondon } from "./BlogPage/PageLondon.tsx";
import { PageAmsterdam } from "./BlogPage/PageAmsterdam.tsx";
import { PageEurope } from "./BlogPage/PageEurope.tsx";
import { PageTicketSearch } from "./component/Destinations/PageTicketSearch.tsx";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
   { path: "PageBali", element: <PageBali /> },
  { path: "PageLondon", element: <PageLondon /> },
  { path: "PageAmsterdam", element: <PageAmsterdam /> },
  { path: "PageEurope", element: <PageEurope /> },
  { path: "PageTicketSearch", element: <PageTicketSearch /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
