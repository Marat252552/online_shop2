import bestItemImage from './../../../Assets/Images/iphones.webp'
import styles from './lib/styles.module.css'
import Annotation from './models/Annotation'

const BestItem = () => {
    return <div>
        <img src={bestItemImage} className={styles.img}/>
        <Annotation text='Apple iPhone 14 Plus dual-SIM 256 ГБ, «сияющая звезда». 94 990 ₽. 99 990 ₽. 15 832 ₽ × 6 мес. В корзину. Купить в один клик. В корзину.'/>
    </div>
}

export default BestItem