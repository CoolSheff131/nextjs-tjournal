import React from 'react'
import { Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import styles from './AuthDialog.module.scss'
interface AuthDialogProps {
    onClose: () => void;
    visible: boolean;
}
export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = React.useState<'main' | 'email'>('main')
    return (
        <Dialog open={visible} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography className={styles.title}>{formType === "main" ? 'Вход в TJ' : <p onClick={() => setFormType('main')} className='backTitle'>
                            <ArrowBackIcon />
                            Вход через почту</p>}</Typography>
                        {
                            formType === 'main' && <>
                                <div>
                                    <Button className="mb-10" variant="contained" fullWidth>ВКонтакте</Button>
                                    <Button className="mb-10" variant="contained" fullWidth>Google</Button>
                                    <Button onClick={() => setFormType('email')} className="mb-10" variant="contained" fullWidth>Через почту</Button>
                                </div>
                                <div>
                                    <Button className="mb-10" variant="contained" fullWidth>ВКонтакте</Button>
                                    <Button className="mb-10" variant="contained" fullWidth>Google</Button>
                                    <Button className="mb-10" variant="contained" fullWidth>Через почту</Button>
                                </div>
                            </>
                        }
                        {
                            formType === 'email' && <div>
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
                                    <Button>
                                        Войти
                                    </Button>
                                </form>
                            </div>
                        }
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>

    )
}