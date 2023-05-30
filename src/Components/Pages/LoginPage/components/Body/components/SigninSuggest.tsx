import { useNavigate } from "react-router-dom"
import ActiveSpan from "../../../../../UI/ActiveSpan"

let div_style = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }


const SigninSuggest = () => {
    let navigate = useNavigate()
    return <div style={div_style}>
        <span>Not a member?</span>
        <ActiveSpan
            style={{ fontWeight: '600' }}
            onClick={() => { navigate('/signin') }}
        >Join us</ActiveSpan>
    </div>
}

export default SigninSuggest