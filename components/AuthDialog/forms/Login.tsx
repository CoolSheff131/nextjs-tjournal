import { TextField, Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormSchema } from '../../../utils/validations'
import { FormField } from '../../FormField'
import { LoginDto } from '../../../utils/api/types'
import { UserApi } from '../../../utils/api'
import { setCookie } from 'nookies'
import Alert from '@material-ui/lab/Alert'

interface LoginFormProps {
    onOpenRegister: () => void
}

export const Login: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
    const [errorMessage, setErrorMessage] = React.useState('')
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(LoginFormSchema)
    })
    const onSubmit = async (dto: LoginDto) => {
        try {
            const data = await UserApi.login(dto)
            setCookie(null, 'authToken', data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })
            setErrorMessage('')
        } catch (error) {
            console.log(error);
            if (error.response) {
                setErrorMessage(error.response.data.message)
            }
        }
    }
    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    {errorMessage && <Alert severity="error" className="mb-20">
                        {errorMessage}
                    </Alert>}
                    <div className="d-flex justify-between" >
                        <Button disabled={!form.formState.isValid || form.formState.isSubmitting} type="submit" color="primary" variant="contained">
                            Войти
                        </Button>
                        <Button onClick={onOpenRegister} color="primary" variant="text">
                            Регистрация
                        </Button>

                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
