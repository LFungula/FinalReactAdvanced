import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage, loader as eventPageLoader } from "./pages/EventPage";
import { EventsPage, loader as eventsPageLoader } from "./pages/EventsPage";
import { AddNewEventPage } from "./pages/AddNewEventPage";
import { Users, loader as usersLoader } from "./pages/Users";
import { UserPage, loader as userPageLoader } from "./pages/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        loader: eventsPageLoader,
      },

      {
        path: "/event/:eventId",
        element: <EventPage />,
        loader: eventPageLoader,
      },
      {
        path: "/event/new",
        element: <AddNewEventPage />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: "/users/:userId",
        element: <UserPage />,
        loader: userPageLoader,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
