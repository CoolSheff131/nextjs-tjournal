import { TextField, Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFormSchema } from '../../../utils/validations'
import { FormField } from '../../FormField'

interface LoginFormProps {
    onOpenRegister: () => void
}

export const Login: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(LoginFormSchema)
    })
    const onSubmit = data => {

    }
    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField name="email" label="Почта" />
                    <FormField name="password" label="Пароль" />
                    <div className="d-flex justify-between" >
                        <Button type="submit" color="primary" variant="contained">
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
