import sharedStyles from './../../../../Shared/styles.module.css'
import FormTemplate from '../../../../Templates/Other/FormTemplate'
import CustomTextField from '../../../../UI/CustomTextField'
import BlackOvalButton from '../../../../UI/BlackOvalButton'
import CustomCheckbox from '../../../../UI/CustomCheckbox'
import LoginSuggest from './components/LoginSuggest'


const Body = () => {
    return <div className={sharedStyles.small_max_width_container}>
        <FormTemplate>
            <span style={{ textAlign: 'center', fontSize: '50px' }}>CONTROL</span>
            <CustomTextField id="outlined-basic" label="Login" size='small' variant="outlined" />
            <CustomTextField id="outlined-basic" type='password' label="Password" size='small' variant="outlined" />
            <CustomTextField id="outlined-basic" type='password' label="Repeat password" size='small' variant="outlined" />
            <CustomCheckbox text='Remember me' />
            <BlackOvalButton value='Sign in' />
            <LoginSuggest />
        </FormTemplate>
    </div>
}

export default Body