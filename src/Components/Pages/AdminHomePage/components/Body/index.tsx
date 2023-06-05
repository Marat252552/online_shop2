import styles from './lib/styles.module.css'


const Body = () => {
    return <div className={styles.container}>
        <h1>Вы администратор</h1>
        <p>Вы можете удалить любого пользователя либо изменить его статус</p>
    </div>
}

export default Body