import { TextField, Button } from '@material-ui/core'
import React from 'react'

interface LoginFormProps {
    onOpenRegister: () => void
}

export const Login: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
    return (
        <div>
            <form>
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
                        Войти
                    </Button>
                    <Button onClick={onOpenRegister} color="primary" variant="text">
                        Регистрация
                    </Button>

                </div>
            </form>
        </div>
    )
}
