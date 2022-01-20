import { Paper, Typography, Divider, TextField, Button } from '@material-ui/core'
import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'


export const Settings = () => {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography>Основные настройкик</Typography>
                <Divider className="mt-20 mb-30" />
                <form>
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Никнейм"
                        variant="outlined"
                        fullwidth
                        required
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Эл. почта"
                        variant="outlined"
                        fullwцidth
                        required
                    />
                    <TextField size="small" label="Пароль" variant="outlined" fillWidth required />
                    <Divider className="mt-30 mb-20" />
                    <Button>
                        Сохранить изменения
                    </Button>
                </form>
            </Paper>
        </MainLayout>
    )
}
