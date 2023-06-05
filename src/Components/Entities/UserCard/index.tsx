import { Statuses } from '../../Shared/types'
import UserDescription from './components/UserDescription'
import iphone13 from './../../../Assets/Images/iphone13.png'
import ElementCard from '../../UI/ElementCard'
import ChangeAccessButton from './components/ChangeAccessButton'
import DeleteUserButton from './components/DeleteUserButton'
import { Props_T } from './lib/types'


const UserCard = ({ user, deleteUser, grantAccess, lowerAccess }: Props_T) => {
    return <>
        <ElementCard
            buttons={ user.status !== Statuses.admin &&
                <>
                    <ChangeAccessButton
                        grantAccess={grantAccess}
                        lowerAccess={lowerAccess}
                        user={user}
                    />
                    <DeleteUserButton 
                        deleteUser={deleteUser}
                        user={user}
                    />
                </>
            }
            descriptions={<UserDescription user={user} />}
            // img_name={iphone13}
        />
    </>
}

export default UserCard