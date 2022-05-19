import { useForm, FieldValues, FieldErrors } from 'react-hook-form'
import axios from 'axios'

export const AuthPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    async function handleRegister(data: FieldValues) {

        class RecievedValue {
            constructor(private message: string) {
                this.message = message
            }
        }

        const response = await axios.post('http://localhost:3000/api/auth', {
            username: data.username,
            password: data.password
        }
        ).then(response => {
            if (response.status === 200 && response.data instanceof RecievedValue) {
                return response.data
            } else {
                throw response.data.error
            }
        })
        .catch(error => {
            console.log(error)
        })


    }

    function handleCatchErrors(error: FieldErrors) {

    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(handleRegister, handleCatchErrors)} >
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
                    <button >register</button>
                </form>
            </div>
        </div>
    )
}