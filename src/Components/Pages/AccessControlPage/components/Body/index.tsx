import UserCard from '../../../../Entities/UserCard'
import FilterBodyTemplate from '../../../../Templates/Body/FilterBodyTemplate'
import StatusesFilterBar from '../../../../Widgets/UsersFilterBar'
import { Element_T } from '../../../../Shared/types'
import { useState } from 'react'
import RestAPI from '../../../../../API/RestAPI'


const Body = () => {
    let statuses: Element_T[] = [
        { _id: 'USER', name: 'Пользователи' },
        { _id: 'MANAGER', name: 'Менеджеры' },
    ]
    let [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

    let [deleteUser] = RestAPI.useDeleteUserMutation()
    let [grantAccess] = RestAPI.useGrantAccessMutation()
    let [lowerAccess] = RestAPI.useLowerAccessMutation()

    let { data } = RestAPI.useGetUsersQuery({statuses: selectedStatuses})
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