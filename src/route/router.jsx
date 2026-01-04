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
import PetDetails from "../components/PetDetails";
import ProductListing from "../Pages/ProductListing";
import ErrorPage1 from "../Pages/ErrorPage1";
import ErrorPage2 from "../Pages/ErrorPage2";
import AboutPawMart from "../components/AboutPawMart";

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
        path: "about",
        Component: AboutPawMart,
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
        element: (
          <PrivateRouter>
            <MyListing />
          </PrivateRouter>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRouter>
            <MyOrders />
          </PrivateRouter>
        ),
      },
      {
        path: "petDetails/:id",
        element: (
          <PrivateRouter>
            <PetDetails />
          </PrivateRouter>
        ),
      },
      {
        path: "productListing/:category",
        element: (
          <PrivateRouter>
            <ProductListing />
          </PrivateRouter>
        ),
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
  {
    path: "/*",
    element:<ErrorPage2/>,
  },
  {
    path: "errorPage",
    element:<ErrorPage1/>,
  },
]);

export default router;
