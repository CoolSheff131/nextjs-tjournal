import React from 'react'
import Link from 'next/link'
import { Paper, Button, IconButton, Avatar, Dialog, DialogContentText, Typography } from '@material-ui/core'
import {
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowButton,
    NotificationsNoneOutlined as NotificationIcon,
    AccountCircleOutlined as UserIcon

} from '@material-ui/icons'

import styles from './Header.module.scss'
import { AuthDialog } from '../AuthDialog'
import { useAppSelectore } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'

export const Header: React.FC = () => {
    const userData = useAppSelectore(selectUserData)
    const [authVisible, setSetAuthVisible] = React.useState(false)

    const openAuthDialog = () => {
        setSetAuthVisible(true)
    }

    const closeAuthDialog = () => {
        setSetAuthVisible(false)
    }

    return (
        <Paper className={{ root: styles.root }} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} className="mr-20" alt="logo" />
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>
                <Link href="/write">
                    <a>
                        <Button variant="outlined" className={styles.penButton}>
                            Новая запись
                        </Button>
                    </a>
                </Link>
            </div>
            <div className="d-flex align-center">
                <IconButton >
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                {userData ? <Link href="/profile/1">
                    <a className="d-flex align-center">
                        <Avatar
                            className={styles.avatar}
                            alt="Remu Sharp"
                        />
                        <ArrowButton />
                    </a>
                </Link> : <div onClick={openAuthDialog} className={styles.loginButton}>
                    <UserIcon />
                    Войти
                </div>
                }
            </div>

            <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
        </Paper>
    )
}