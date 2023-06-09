import ItemImage from '../../Entities/ItemImage'
import styles from './lib/styles.module.css'
import { Props_T } from './lib/types'


const ElementCard = ({ src, descriptions, buttons }: Props_T) => {
    return <div className={styles.mainContainer}>
        <div className={styles.container}>
            {src && <div className={styles.image_module}>
                <ItemImage src={src} />
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