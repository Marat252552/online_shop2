import { User_T } from "../../../Shared/types"



const UserDescription = ({ user }: { user: User_T }) => {
    return <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
            <span>Имя пользователя </span>
            <span style={{fontWeight: 'bold'}}>{user.login}</span>
        </div>

        <div>
            <span>Статус </span>
            <span style={{fontWeight: 'bold'}}>{user.status}</span>
        </div>
    </div>
}

export default UserDescription