import { StyledEngineProvider } from '@mui/material'
import styles from './lib/styles.module.css'


const FormTemplate = ({ children, onSubmit }: { children: JSX.Element[] | JSX.Element, onSubmit: any }) => {
    
    return <StyledEngineProvider injectFirst>
        <form onSubmit={onSubmit}>
            <div className={styles.container}>
                {children}
            </div>
        </form>
    </StyledEngineProvider>
}

export default FormTemplate