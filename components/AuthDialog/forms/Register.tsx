import { TextField, Button } from '@material-ui/core'
import React from 'react'

interface RegisterFormProps {
    onOpenLogin: () => void
}

export const Register: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
    return (
        <div>
            <form>
                <TextField
                    className="mb-20"
                    size="small"
                    label="Имя и фамилия"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    className="mb-20"
                    size="small"
                    label="Почта"
                    variant="outlined"
                    fullWidth
                    required
                />
                <TextField
                    className="mb-20"
                    size="small"
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                />
                <div className="d-flex justify-between" >
                    <Button color="primary" variant="contained">
                        Зарегестрироваться
                    </Button>
                    <Button onClick={onOpenLogin} color="primary" variant="text">
                        Войти
                    </Button>

                </div>
            </form>
        </div>
    )
}
