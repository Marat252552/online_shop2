import sharedStyles from './../../../../Shared/styles.module.css'
import FormTemplate from '../../../../Templates/Other/FormTemplate'
import CustomTextField from '../../../../UI/CustomTextField'
import BlackOvalButton from '../../../../UI/BlackOvalButton'
import CustomCheckbox from '../../../../UI/CustomCheckbox'
import LoginSuggest from './components/LoginSuggest'
import { Inputs_T } from './lib/types'
import { useForm } from 'react-hook-form'
import { StyledEngineProvider } from '@mui/material'


const Body = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    const onSubmit = (values: Inputs_T) => {
        console.log(values)
    }
    return <div className={sharedStyles.small_max_width_container}>
        <span style={{ textAlign: 'center', fontSize: '50px' }}>CONTROL</span>
        <StyledEngineProvider injectFirst>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormTemplate>
                    <CustomTextField
                        {...register('login', {
                            required: 'Введите логин',
                            maxLength: 20,
                            pattern: {
                                value: /^[a-z0-9]+$/i,
                                message: 'Допустимы только латинские символы'
                            },
                            // validate: async (value) => {
                            //     // try {
                            //     //     await IsduplAPI(value)
                            //     // } catch (e) {
                            //     //     console.log(e)
                            //     //     return 'Логин занят'
                            //     // }
                            // }
                        })}
                        error={errors.login}
                        helperText={errors.login?.message}
                        id="outlined-basic"
                        label="Login"
                        size='small'
                        variant="outlined" />

                    <CustomTextField
                        {...register('password', {
                            required: 'Введите пароль',
                            pattern: {
                                value: /^[a-z0-9]+$/i,
                                message: 'Допустимы только латинские символы'
                            }
                        })}
                        id="outlined-basic"
                        type='password'
                        label="Password"
                        size='small'
                        variant="outlined" />

                    <CustomTextField
                        {...register('password2', {
                            required: 'Подтвердите пароль',
                            validate: (value, formValues) => {
                                if (value !== formValues.password) {
                                    return 'Пароли не совпадают'
                                }
                            }
                        })}
                        label={errors.password2?.message || 'Подтвердите пароль'}
                        error={!!errors.password2 || !!null}
                        helperText={errors.password2?.message || null}
                        id="outlined-basic"
                        type='password'
                        size='small'
                        variant="outlined" />

                    <CustomCheckbox text='Remember me' />
                    <button type='submit'>Далее</button>
                    <LoginSuggest />
                </FormTemplate>
            </form>
        </StyledEngineProvider>
    </div>
}

export default Body