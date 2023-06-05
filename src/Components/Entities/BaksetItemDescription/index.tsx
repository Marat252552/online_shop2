import { DeleteOutlined } from '@ant-design/icons'
import styles from './lib/styles.module.css'
import TextAndIconButton from '../../Shared/models/TextAndIconButton'
import { Item_T } from '../../Shared/types'
import RestAPI from '../../../API/RestAPI'
import { Skeleton } from 'antd'
import FavoriteButton from '../../Features/Buttons/FavoriteButton'
import CartButton from '../../Features/Buttons/CartButton'


const BasketItemDescription = ({ item }: { item: Item_T }) => {

    let { data } = RestAPI.useGetBrandsQuery()

    let [removeAllSameItems] = RestAPI.useRemoveAllSameItemsFromCartMutation()

    let brand_name = data?.brands.find(el => el._id === item.brand_id)?.name

    return <div className={styles.main_container}>
        <div className={styles.text_module_container}>
            {
                (item.name && brand_name) ?
                    <>
                        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                        <span>{brand_name}</span>
                    </>
                    :
                    <Skeleton active />
            }

        </div>

        <CartButton item={item} />
        
        <div className={styles.buttons_module_container}>

            <FavoriteButton item={item}/>

            <div onClick={() => {removeAllSameItems({item_id: item._id})}}>
                <TextAndIconButton Icon={DeleteOutlined}/>
            </div>
        </div>
    </div>
}

export default BasketItemDescription