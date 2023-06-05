import sharedStyles from './../../../../Shared/styles.module.css'
import BestItem from '../../../../Entities/BestItem'
import ThreeItemsRow from '../../../../Widgets/ThreeItemsRow'

const Body = () => {
    return <div className={sharedStyles.max_width_container}>
        <BestItem />
        <h1 style={{textAlign: 'center'}}>Наши топ товары</h1>
        <ThreeItemsRow />
    </div>
}

export default Body