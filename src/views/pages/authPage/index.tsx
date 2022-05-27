import { useForm, FieldErrors, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { Container, CustomForm, CustomInput, ErrorText, CustomButton, CustomInputLabel, AuthFormTitle, InputTitleText } from './styled'

interface FormValues {
    username: string,
    password: string,
    rememberMe: string
}

export const AuthPage = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormValues>({
        mode: 'onTouched'
    })


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        reset()
    }

    const onError: SubmitErrorHandler<FieldErrors> = (error) => {
        alert(error)
    }

    return (
        <Container>
            <CustomForm onSubmit={handleSubmit(onSubmit, onError)} >
                <AuthFormTitle>Register</AuthFormTitle>
                <CustomInputLabel column align >
                    <InputTitleText>Username</InputTitleText>
                    <CustomInput {...register('username', {
                        required: 'Username is required',
                        minLength: {
                            value: 3,
                            message: 'Username cant be less then 3 symbols'
                        },
                        maxLength: {
                            value: 36,
                            message: 'Username cannot be described 36 characters'
                        }
                    })} autoComplete='off' />
                    <br />
                    {errors && <ErrorText> {errors.username?.message} </ErrorText>}
                </CustomInputLabel>
                <CustomInputLabel column align >
                    <InputTitleText>Password</InputTitleText>
                    <CustomInput {...register('password',
                        {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password cant be less then 8 symbols'
                            },
                            maxLength: {
                                value: 64,
                                message: 'Password cannot be described 36 characters'
                            }
                        })} type='password' />
                    <br />
                    {errors && <ErrorText> {errors.password?.message} </ErrorText>}
                </CustomInputLabel>

                <CustomInputLabel>
                    <input type='checkbox' {...register('rememberMe', {})} />
                    <InputTitleText>Remember me </InputTitleText>
                </CustomInputLabel>

                <CustomButton type='submit' disabled={!isValid} >register</CustomButton>
            </CustomForm>
        </Container>
    )
}