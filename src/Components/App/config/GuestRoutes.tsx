import { Route, Routes } from "react-router-dom";
import BasketPage from "../../Pages/BasketPage";
import GoodsPage from "../../Pages/GoodsPage";
import HomePage from "../../Pages/HomePage";
import ItemPage from "../../Pages/ItemPage";
import LoginPage from "../../Pages/LoginPage";
import SigninPage from "../../Pages/SigninPage";
import { Route_T } from "../lib/types";

const GuestRoutes: Route_T[] = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/goods',
        component: GoodsPage
    },
    {
        path: '/item',
        component: ItemPage
    },
    {
        path: '/basket',
        component: BasketPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/signin',
        component: SigninPage
    }
]

export default GuestRoutes