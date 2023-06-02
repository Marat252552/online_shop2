import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './lib/styles.module.css'
import { setupStore } from '../../state/state'
import { Provider } from 'react-redux'
import IsLoggedContainer from '../processes/IsLogged'
import PublicRoutes from './config/PublicRoutes'
import AdminRoutes from './config/AdminRoutes'
import { useAppSelector } from '../../state/hooks'
import { Statuses } from '../Shared/types'
import {useEffect} from 'react'
import ManagerRoutes from './config/ManagerRoutes'


const App = () => {
    const {status} = useAppSelector(state => state.UserSlice.user)

    return <div className={styles.body}>
        <div className={styles.wrapper}>
            <IsLoggedContainer>
                <BrowserRouter>
                    <Routes>
                        {status === Statuses.user && PublicRoutes.map(route => {
                            return <Route key={route.path} path={route.path} Component={route.component} />
                        })}
                        {status === Statuses.admin && AdminRoutes.map(route => {
                            return <Route key={route.path} path={route.path} Component={route.component} />
                        })}
                        {status === Statuses.manager && ManagerRoutes.map(route => {
                            return <Route key={route.path} path={route.path} Component={route.component} />
                        })}
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </BrowserRouter>
            </IsLoggedContainer>
        </div>
    </div>
}

let store = setupStore()

const AppProvider = () => {
    return <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>
}

export default AppProvider