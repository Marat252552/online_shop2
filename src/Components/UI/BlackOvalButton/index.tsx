import styles from './lib/styles.module.css'


const BlackOvalButton = (props: any) => {
    return <button className={styles.container}>
        {props.children}
    </button>
}

export default BlackOvalButton