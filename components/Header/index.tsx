import Link from 'next/link'
import { Paper, Button, IconButton, Avatar } from '@material-ui/core'
import {
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowButton,
    NotificationsNoneOutlined as NotificationIcon
} from '@material-ui/icons'

import styles from './Header.module.scss'

export const Header: React.FC = () => {
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
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Link href="/profile/1">
                    <a className="d-flex align-center">
                        <Avatar
                            className={styles.avatar}
                            alt="Remu Sharp"
                        />
                        <ArrowButton />
                    </a>
                </Link>
            </div>
        </Paper>
    )
}