import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styles from './lib/styles.module.css'
import PublicRoutes from './config/routes'
import { setupStore } from '../../state/state'
import { Provider } from 'react-redux'

const App = () => {
    return <div className={styles.body}>
        <div className={styles.wrapper}>
            <BrowserRouter>
                <Routes>
                    {PublicRoutes.map(route => {
                        return <Route key={route.path} path={route.path} Component={route.component} />
                    })}
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
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