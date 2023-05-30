import styles from './lib/styles.module.css'


const BlackOvalButton = ({value}: {value: string}) => {
    return <div className={styles.container}>
        <span style={{userSelect: 'none'}}>{value}</span>
    </div>
}

export default BlackOvalButton