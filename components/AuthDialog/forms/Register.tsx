import { yupResolver } from '@hookform/resolvers/yup'
import { TextField, Button } from '@material-ui/core'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { LoginFormSchema, RegisterFormSchema } from '../../../utils/validations'
import { FormField } from '../../FormField'

interface RegisterFormProps {
    onOpenLogin: () => void
}

export const Register: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterFormSchema)
    })
    const onSubmit = data => {

    }
    return (
        <div>
            <FormProvider {...form}>
                <FormField name="fullname" label="Имя и фамилия" />
                <FormField name="email" label="Почта" />
                <FormField name="password" label="Пароль" />
                <form>
                    <div className="d-flex justify-between" >
                        <Button color="primary" variant="contained">
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
