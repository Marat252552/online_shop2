import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './lib/styles.module.css'
import PublicRoutes from './config/routes'

const App = () => {
    return <div className={styles.body}>
        <div className={styles.wrapper}>
            <BrowserRouter>
                <Routes>
                    {PublicRoutes.map(route => {
                        return <Route key={route.path} path={route.path} Component={route.component} />
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    </div>
}

export default App