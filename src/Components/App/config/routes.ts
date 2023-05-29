import GoodsPage from "../../Pages/GoodsPage";
import HomePage from "../../Pages/HomePage";

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
    }
]

export default PublicRoutes