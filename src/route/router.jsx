import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PetSupplies from "../Pages/PetSupplies";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import MyOrders from "../Pages/MyOrders";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRouter from "../Provider/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "pet-supplies",
        Component: PetSupplies,
      },
      {
        path: "add-listing",
        element: (
          <PrivateRouter>
            <AddListing />
          </PrivateRouter>
        ),
      },
      {
        path: "my-listing",
        element:<PrivateRouter>
            <MyListing/>
        </PrivateRouter>
      },
      {
        path: "my-orders",
        element:<PrivateRouter>
            <MyOrders/>
        </PrivateRouter>
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
