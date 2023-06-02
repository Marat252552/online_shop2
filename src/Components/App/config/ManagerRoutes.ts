import BrandsControlPage from "../../Pages/BrandsControlPage"
import CreateNewBrandPage from "../../Pages/CreateNewBrandPage"
import CreateNewItemPage from "../../Pages/CreateNewItemPage"
import CreateNewTypePage from "../../Pages/CreateNewTypePage"
import ItemsControlPage from "../../Pages/ItemsControlPage"
import ManagerHomePage from "../../Pages/ManagerHomePage"
import TypesControlPage from "../../Pages/TypesControlPage"
import { Route_T } from "../lib/types"

const ManagerRoutes: Route_T[] = [
    {
        path: '/',
        component: ManagerHomePage
    },
    {
        path: '/itemscontrol',
        component: ItemsControlPage
    },
    {
        path: '/brandscontrol',
        component: BrandsControlPage
    },
    {
        path: '/typescontrol',
        component: TypesControlPage
    },
    {
        path: '/createbrand',
        component: CreateNewBrandPage
    },
    {
        path: '/createtype',
        component: CreateNewTypePage
    },
    {
        path: '/createitem',
        component: CreateNewItemPage
    },

]

export default ManagerRoutes