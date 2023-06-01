import { Route_T } from "../lib/types";
import GuestRoutes from "./GuestRoutes";

const UserRoutes: Route_T[] = GuestRoutes.filter(route => {
    return route.path !== '/login' && route.path !== '/signin'
})

export default UserRoutes