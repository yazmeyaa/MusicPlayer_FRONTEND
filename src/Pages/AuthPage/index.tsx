import { useForm, FieldErrors, SubmitHandler, FieldValues, SubmitErrorHandler } from 'react-hook-form'
import axios from 'axios'

interface FormValues {
    username: string,
    password: string
}

export const AuthPage = () => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormValues>({
        mode: 'onBlur'
    })
    //

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        alert(data)
        reset()
    }

    const onError: SubmitErrorHandler<FieldErrors> = (error) => {
        alert(error)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit, onError)} >
                    <label >
                        Username
                        <input {...register('username', {
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
                    </label>
                    <label>
                        Password
                        <input {...register('password',
                            {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password cant be less then 3 symbols'
                                },
                                maxLength: {
                                    value: 64,
                                    message: 'Password cannot be described 36 characters'
                                }
                            })} />
                    </label>
                    <button type='submit' disabled={!isValid} >register</button>
                </form>
            </div>
        </div>
    )
}