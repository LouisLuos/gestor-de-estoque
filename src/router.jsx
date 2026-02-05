import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ListItems from "./pages/itens/ListItems";
import CreateItem from "./pages/itens/CreateItem";
import DetailsItem from "./pages/itens/DetailsItem";
import UpdateItem from "./pages/itens/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "items",
        children: [
          { index: true, element: <ListItems /> },
          { path: "create", element: <CreateItem /> },
          { path: "details/:id", element: <DetailsItem /> },
          { path: "update/:id", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
