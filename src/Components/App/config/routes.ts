import BasketPage from "../../Pages/BasketPage";
import GoodsPage from "../../Pages/GoodsPage";
import HomePage from "../../Pages/HomePage";
import ItemPage from "../../Pages/ItemPage";
import LoginPage from "../../Pages/LoginPage";

type Route_T = {
    path: string,
    component: () => JSX.Element
}

const PublicRoutes: Route_T[] = [
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
    }
]

export default PublicRoutes