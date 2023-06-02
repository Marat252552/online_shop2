import ItemImage from '../../Entities/ItemImage'
import styles from './lib/styles.module.css'
import { Props_T } from './lib/types'


const ElementCard = ({ imgSRC, descriptions, buttons }: Props_T) => {
    return <div className={styles.mainContainer}>
        <div className={styles.container}>
            {imgSRC && <div className={styles.image_module}>
                <ItemImage src={imgSRC} />
            </div>}

            <div className={styles.descriptionAndButtons_module}>
                <div className={styles.description_module}>
                    {descriptions}
                </div>
                <div className={styles.buttons_module}>
                    {buttons}
                </div>
            </div>
        </div>
    </div>

}

export default ElementCard