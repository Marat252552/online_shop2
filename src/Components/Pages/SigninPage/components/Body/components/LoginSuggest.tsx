import { useNavigate } from "react-router-dom"
import ActiveSpan from "../../../../../UI/ActiveSpan"

let div_style = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }


const LoginSuggest = () => {
    let navigate = useNavigate()
    return <div style={div_style}>
        <span>Уже есть аккаунт?</span>
        <ActiveSpan
            style={{ fontWeight: '600' }}
            onClick={() => { navigate('/login') }}
        >Войти</ActiveSpan>
    </div>
}

export default LoginSuggest