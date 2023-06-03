import { useParams } from 'react-router-dom'
import ItemImage from '../../../../Entities/ItemImage'
import styles from './lib/styles.module.css'
import ItemInfo from './models/ItemInfo'
import RestAPI from '../../../../../API/RestAPI'
import { backendURL } from '../../../../App/config/env'


const Body = () => {
    let {_id} = useParams<{ _id: string }>()
    
    if (!_id) return <></>

    let { data: itemData } = RestAPI.useGetItemQuery({ _id })

    return <>
        {itemData?.item && <div className={styles.mainContainer}>
            <div className={styles.image_container}>
                <ItemImage src={backendURL + '/' + itemData.item.main_img_name}/>
            </div>
            <ItemInfo item={itemData.item}/>
        </div>}
    </>
}

export default Body