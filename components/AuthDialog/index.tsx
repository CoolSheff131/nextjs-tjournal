import React from 'react'
import { Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import styles from './AuthDialog.module.scss'
import { Main } from './forms/Main'
import { Login } from './forms/Login'
import { Register } from './forms/Register'
interface AuthDialogProps {
    onClose: () => void;
    visible: boolean;
}
export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = React.useState<'main' | 'email' | 'register'>('main')
    return (
        <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography className={styles.title}>{formType === "main" ? 'Вход в TJ' : <p onClick={() => setFormType('main')} className='backTitle'>
                            <ArrowBackIcon />
                            К авторизации</p>}</Typography>
                        {
                            formType === 'main' && <Main onOpenLogin={() => setFormType('email')} />
                        }
                        {
                            formType === 'email' && <Login onOpenRegister={() => setFormType('register')} />
                        }
                        {
                            formType === 'register' && <Register onOpenLogin={() => setFormType('email')} />
                        }
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>

    )
}