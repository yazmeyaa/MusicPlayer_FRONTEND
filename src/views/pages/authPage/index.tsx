import { useForm, FieldErrors, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { Container, CustomForm, CustomInput, CustomButton } from './styled'

interface FormValues {
    username: string,
    password: string
}

export const AuthPage = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormValues>({
        mode: 'onBlur'
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
                Register
                <label >
                    Username
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
                    })} />
                    <br />
                    {errors && errors.username?.message}
                </label>
                <label>
                    Password
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
                        })} />
                    <br />
                    {errors && errors.password?.message}
                </label>
                <CustomButton type='submit' disabled={!isValid} >register</CustomButton>
            </CustomForm>
        </Container>
    )
}