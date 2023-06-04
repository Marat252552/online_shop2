import UserCard from '../../../../Entities/UserCard'
import AdminAPI from '../../../../../API/AdminAPI/AdminAPI'
import FilterBodyTemplate from '../../../../Templates/Body/FilterBodyTemplate'
import StatusesFilterBar from '../../../../Widgets/UsersFilterBar'
import { Element_T } from '../../../../Shared/types'
import { useState } from 'react'


const Body = () => {
    let statuses: Element_T[] = [
        { _id: 'USER', name: 'Пользователи' },
        { _id: 'MANAGER', name: 'Менеджеры' },
    ]
    let [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

    let [deleteUser] = AdminAPI.useDeleteUserMutation()
    let [grantAccess] = AdminAPI.useGrantAccessMutation()
    let [lowerAccess] = AdminAPI.useLowerAccessMutation()

    let { data } = AdminAPI.useGetUsersQuery({statuses: selectedStatuses})
    return <>

        <FilterBodyTemplate
            navbarModule={<>
                <StatusesFilterBar
                    selectedStatuses={selectedStatuses}
                    setSelectedStatuses={setSelectedStatuses}
                    statuses={statuses}
                />
            </>}
            listModule={<>
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
            </>}
        />
    </>
}

export default Body