import styles from './lib/styles.module.css'


const FormTemplate = ({children}: {children: JSX.Element[] | JSX.Element}) => {
    return <div className={styles.container}>
        {children}
    </div>
}

export default FormTemplate