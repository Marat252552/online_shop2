import styles from './lib/styles.module.css'


const BrandsFilterModule = () => {
    let brandsList = [
        'Apple',
        'Samsung',
        'Xiaomi',
        'Honor',
        'Apple',
        'Samsung',
        'Xiaomi',
        'Honor'
    ]
    return <div className={styles.container}>
        {brandsList.map(el => <span>{el}</span>)}
    </div>
}

export default BrandsFilterModule