import styles from './lib/styles.module.css'
import BlackOvalButton from '../../../../UI/BlackOvalButton';
import CustomTextField from '../../../../UI/CustomTextField';
import SmallModuleTemplate from '../../../../Templates/Modules/SmallModuleTemplate';
import CustomCheckbox from '../../../../UI/CustomCheckbox';
import SigninSuggest from './components/SigninSuggest';
import FormTemplate from '../../../../Templates/Other/FormTemplate';

const Body = () => {
    return <>
        <SmallModuleTemplate>
            <FormTemplate>
                <span style={{ textAlign: 'center', fontSize: '50px' }}>CONTROL</span>
                <CustomTextField id="outlined-basic" label="Login" size='small' variant="outlined" />
                <CustomTextField id="outlined-basic" label="Password" size='small' type='password' variant="outlined" />
                <CustomCheckbox text='Remember me' />
                <BlackOvalButton value='Login' />
                <SigninSuggest />
            </FormTemplate>
        </SmallModuleTemplate>
    </>
}

export default Body