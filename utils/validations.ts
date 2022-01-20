import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Не корректная почта').required('Заполните это поле'),
    password: yup.string().min(6,'Коротко').required('Заполните это поле')
})
export const RegisterFormSchema = yup.object().shape({
    fullname: yup.string().required('Заполните это поле'),
}).concat(LoginFormSchema)