import AccessControlPage from "../../Pages/AccessControlPage"
import AdminHomePage from "../../Pages/AdminHomePage"
import { Route_T } from "../lib/types"

const AdminRoutes: Route_T[] = [
    {
        path: '/',
        component: AdminHomePage
    },
    {
        path: '/accesscontrol',
        component: AccessControlPage
    },
]

export default AdminRoutes