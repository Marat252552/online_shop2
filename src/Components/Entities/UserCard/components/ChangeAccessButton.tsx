import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"
import TextAndIconButton from "../../../Shared/models/TextAndIconButton"
import { User_T } from "../../../Shared/types"
import { API_T } from "../lib/types"


const ChangeAccessButton = ({ user, grantAccess, lowerAccess }: { user: User_T, grantAccess: API_T, lowerAccess: API_T }) => {
    return <>
        {(user.status === 'USER') ?
            <div onClick={() => { grantAccess({ _id: user._id }) }}>
                <TextAndIconButton Icon={CaretUpOutlined} text='Повысить до менеджера' />
            </div>
            :
            <div onClick={() => { lowerAccess({ _id: user._id }) }}>
                <TextAndIconButton Icon={CaretDownOutlined} text='Понизить до пользователя' />
            </div>}
    </>
}

export default ChangeAccessButton