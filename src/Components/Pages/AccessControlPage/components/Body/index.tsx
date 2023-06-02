import { Element_T } from '../../../../Entities/FilterModule/lib/types'
import UserCard from '../../../../Entities/UserCard'
import AdminAPI from '../../../../../API/AdminAPI/AdminAPI'
import FilterBodyTemplate from '../../../../Templates/Body/FilterBodyTemplate'


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
        <FilterBodyTemplate elements={elements}>
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
        </FilterBodyTemplate>
    </>
}

export default Body