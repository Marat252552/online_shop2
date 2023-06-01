import { Element_T } from '../../../../Entities/FilterModule/lib/types'
import FilterBar from '../../../../Widgets/FilterBar'
import styles from './lib/styles.module.css'
import LargeModuleTemplate from '../../../../Templates/Modules/LargeModuleTemplate'
import UserCard from '../../../../Entities/UserCard'
import AdminAPI from '../../../../../API/AdminAPI/AdminAPI'


const Body = () => {
    let elements: Element_T[] = [
        { value: 'USER', title: 'Пользователи' },
        { value: 'MANAGER', title: 'Менеджеры' },
    ]
    let [deleteUser] = AdminAPI.useDeleteUserMutation()
    let [grantAccess] = AdminAPI.useGrantAccessMutation()
    let [lowerAccess] = AdminAPI.useLowerAccessMutation()
    let { data } = AdminAPI.useGetUsersQuery()
    return <>
        <LargeModuleTemplate>
            <div className={styles.container}>
                <FilterBar elements={elements} />
                <div className={styles.usersList_module}>
                    {data?.users && data.users.map(user => {
                        return <>
                            <UserCard
                                grantAccess={grantAccess}
                                lowerAccess={lowerAccess}
                                deleteUser={deleteUser}
                                user={user}
                            />
                        </>
                    })}
                </div>
            </div>
        </LargeModuleTemplate>
    </>
}

export default Body