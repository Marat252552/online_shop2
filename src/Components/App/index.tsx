import { BrowserRouter } from 'react-router-dom'
import styles from './lib/styles.module.css'
import PublicRoutes from './config/routes'

const App = () => {
    return <div className={styles.body}>
        <div className={styles.wrapper}>
            <BrowserRouter>
                {PublicRoutes.map(route => {
                    return <route.component />
                })}
            </BrowserRouter>
        </div>
    </div>
}

export default App