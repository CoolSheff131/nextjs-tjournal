import React from 'react'
import { Typography, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined'

import styles from './Comment.module.scss'
import { ResponseUser } from '../../utils/api/types'


interface CommentPostProps {
    text: string;
    createdAt: string;
    user: ResponseUser;
    currentUserId: number;
    id: number;
    onRemove: (id: number) => void
}

export const Comment: React.FC<CommentPostProps> = ({ user, id, text, createdAt, currentUserId, onRemove }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClickRemove = async () => {
        if (window.confirm('Удалить?')) {
            try {
                await Api().comment.remove(id)
                onRemove(id)
            } catch (err) {
                console.log(err);
            } finally {
                handleClose()
            }

        }

    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <Avatar style={{ marginRight: 10 }}>{user.fullname[0]}</Avatar>
                <b>{user.fullname}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            {user.id === currentUserId &&
                <>
                    <span className={styles.replyBtn}>Ответить</span>
                    <IconButton onClick={handleClick}>
                        <MoreIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        elevation={3}
                        onClose={handleClose}
                        keepMounted>
                        <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
                        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                    </Menu>
                </>
            }
        </div>
    )
}