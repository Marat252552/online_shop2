import styles from './lib/styles.module.css'

const Annotation = ({text}: {text: string}) => {
    return <div className={styles.container}>
        <h2>Лучшая цена</h2>
        <p>{text}</p>
    </div>
}

export default Annotation