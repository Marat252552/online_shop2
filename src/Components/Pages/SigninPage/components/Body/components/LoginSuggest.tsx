import { useNavigate } from "react-router-dom"
import ActiveSpan from "../../../../../UI/ActiveSpan"

let div_style = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }


const LoginSuggest = () => {
    let navigate = useNavigate()
    return <div style={div_style}>
        <span>Already have account?</span>
        <ActiveSpan
            style={{ fontWeight: '600' }}
            onClick={() => { navigate('/login') }}
        >Log in</ActiveSpan>
    </div>
}

export default LoginSuggest