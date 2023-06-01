import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './lib/styles.module.css'
import { setupStore } from '../../state/state'
import { Provider } from 'react-redux'
import IsLoggedContainer from '../processes/IsLogged'
import { useAppSelector } from '../../state/hooks'
import GuestRoutes from './config/GuestRoutes'
import UserRoutes from './config/UserRoutesData'


const App = () => {
    let { token } = useAppSelector(state => state.UserSlice)
    return <div className={styles.body}>
        <div className={styles.wrapper}>
            <IsLoggedContainer>
                <BrowserRouter>
                    <Routes>
                        {token === '' && GuestRoutes.map(route => {
                            return <Route key={route.path} path={route.path} Component={route.component} />
                        })}
                        {token !== '' && UserRoutes.map(route => {
                            return <Route key={route.path} path={route.path} Component={route.component} />
                        })}
                        {/* {token !== '' && <UserRoutes />} */}
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