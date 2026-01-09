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
import DashboardLayout from "../Root/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import ProfilePage from "../Pages/ProfilePage";
import Loading2 from "../Pages/Loading2";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage1/>,
    hydrateFallbackElement:<Loading2></Loading2>,
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
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "add",
        element: (
          <PrivateRouter>
            <AddListing />
         </PrivateRouter>
        ),
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
        path: "profile",
        element: (
          <PrivateRouter>
            <ProfilePage />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage2 />,
  },
  {
    path: "errorPage",
    element: <ErrorPage1 />,
  },
]);

export default router;
