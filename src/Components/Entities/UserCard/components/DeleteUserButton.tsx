import { DeleteOutlined } from "@ant-design/icons"
import TextAndIconButton from "../../../Shared/models/TextAndIconButton"
import { User_T } from "../../../Shared/types"
import { API_T } from "../lib/types"




const DeleteUserButton = ({deleteUser, user}: {deleteUser: API_T, user: User_T}) => {
    return <div onClick={() => { deleteUser({ _id: user._id }) }}>
        <TextAndIconButton Icon={DeleteOutlined} text='Удалить пользователя' />
    </div>
}

export default DeleteUserButton