import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '@material-ui/core'
import React from 'react'
import { setCookie } from 'nookies'
import { FormProvider, useForm } from 'react-hook-form'
import { UserApi } from '../../../utils/api'
import { CreateUserDto } from '../../../utils/api/types'
import { LoginFormSchema, RegisterFormSchema } from '../../../utils/validations'
import { FormField } from '../../FormField'
import Alert from '@material-ui/lab/Alert'
import { useAppDispatch } from '../../../redux/hooks'
import { setUserData } from '../../../redux/slices/user'

interface RegisterFormProps {
    onOpenLogin: () => void
}

export const Register: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
    const dispatch = useAppDispatch()
    const [errorMessage, setErrorMessage] = React.useState('')
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    })
    const onSubmit = async (dto: CreateUserDto) => {
        try {
            const data = await UserApi.register(dto)
            setCookie(null, 'authToken', data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setErrorMessage('')
            dispatch(setUserData(data))
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message)
            }
            console.log(error);
        }
    }
    return (
        <div>
            <FormProvider {...form}>
                <form>
                    <FormField name="fullName" label="Имя и фамилия" />
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    {errorMessage && <Alert severity="error" className="mb-20">
                        {errorMessage}
                    </Alert>}
                    <div className="d-flex justify-between" >
                        <Button
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
                            color="primary" variant="contained">
                            Зарегестрироваться
                        </Button>
                        <Button onClick={onOpenLogin} color="primary" variant="text">
                            Войти
                        </Button>

                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
