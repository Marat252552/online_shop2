import { Statuses, User_T } from '../../Shared/types'
import ItemImage from '../ItemImage'
import UserDescription from './components/UserDescription'
import styles from './lib/styles.module.css'
import TextAndIconButton from '../../Shared/models/TextAndIconButton'
import { CaretUpOutlined, CaretDownOutlined, DeleteOutlined } from '@ant-design/icons'

type API_T = ({ _id }: { _id: string }) => void

const UserCard = ({ user, deleteUser, grantAccess, lowerAccess }: { user: User_T, deleteUser: API_T, grantAccess: API_T, lowerAccess: API_T }) => {
    return <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.image_module}>
                <ItemImage />
            </div>
            <div className={styles.descriptionAndButtons_module}>
                <UserDescription user={user} />
                <div className={styles.buttons_module}>
                    {user.status !== Statuses.admin && <>
                        <div onClick={() => {
                            console.log('delete user')
                            deleteUser({ _id: user._id })

                        }}>
                            <TextAndIconButton Icon={DeleteOutlined} text='Удалить пользователя' />
                        </div>
                        {
                            user.status === 'USER' ?
                                <div onClick={() => {grantAccess({_id: user._id})}}>
                                    <TextAndIconButton Icon={CaretUpOutlined} text='Повысить до менеджера' />
                                </div>
                                :
                                <div onClick={() => {lowerAccess({_id: user._id})}}>
                                    <TextAndIconButton Icon={CaretDownOutlined} text='Понизить до пользователя' />
                                </div>
                        }

                    </>}
                </div>
            </div>
        </div>
    </div>

}

export default UserCard