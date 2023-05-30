import styles from './lib/styles.module.css'


const ActiveSpan = (props: any) => {
    return <span {...props} className={styles.span}>{props.children}</span>
}

export default ActiveSpan