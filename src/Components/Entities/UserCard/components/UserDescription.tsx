import { User_T } from "../../../Shared/types"



const UserDescription = ({user}: {user: User_T}) => {
    return <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        <span>{user.login}</span>
        <span>{user.status}</span>
    </div>
}

export default UserDescription