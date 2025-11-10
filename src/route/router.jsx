import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import PetSupplies from "../Pages/PetSupplies";
import AddListing from "../Pages/AddListing";
import MyListing from "../Pages/MyListing";
import MyOrders from "../Pages/MyOrders";
import Login from "../components/Login";
import Register from "../components/Register";

 const router = createBrowserRouter([
{
    path:'/',
    Component: Root,
    children:[
        {
            index: true,
            Component:Home
        },
        {
            path:'pet-supplies',
            Component: PetSupplies
        },
        {
            path:'add-listing',
            Component: AddListing
        },
        {
            path:'my-listing',
            Component: MyListing
        },
        {
            path:'my-orders',
            Component: MyOrders
        },
        {
            path:'login',
            Component: Login
        },
        {
            path:'register',
            Component: Register
        },
    ]
}
])

export default router