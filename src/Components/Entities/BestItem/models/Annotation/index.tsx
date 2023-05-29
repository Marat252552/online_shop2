import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'

const Annotation = ({text}: {text: string}) => {
    return <div className={styles.container}>
        <h2 className={sharedStyles.header2}>Лучшая цена</h2>
        <p>{text}</p>
    </div>
}

export default Annotation