import RestAPI from '../../../API/RestAPI';
import Item from '../../Entities/Item'
import styles from './lib/styles.module.css'


const ThreeItemsRow = () => {

    let {data} = RestAPI.useGetThreeBestItemsQuery()

    let items = data?.items

    if(!items || !items[0]) return <div></div>

    return <div className={styles.items_row}>
        <Item item={items.item1.item}/>
        <Item item={items.item2.item}/>
        <Item item={items.item3.item}/>
    </div>
}

export default ThreeItemsRow