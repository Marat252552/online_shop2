import styles from './lib/styles.module.css'
import sharedStyles from './../../../../Shared/styles.module.css'
import FavoriteItemsColumn from '../../../../Widgets/FavoriteItemsColumn'
import RestAPI from '../../../../../API/RestAPI'


const Body = () => {

    let { data, isError } = RestAPI.useGetFavoritesQuery()

    let favorite_items = data?.favorite_items

    return <div className={sharedStyles.medium_max_width_container}>
        <div className={styles.main_container}>
            <FavoriteItemsColumn isError={isError} favorite_items={favorite_items} />
        </div>
    </div>
}

export default Body