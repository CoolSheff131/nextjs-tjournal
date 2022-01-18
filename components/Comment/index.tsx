import React from 'react'
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreHorizOutlined'

import styles from './Comment.module.scss'


interface CommentPostProps {
    user: {
        fullname: string;
    };
    text: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img alt="avatar" />
                <b>Master Oogway</b>
                <span>5 часов</span>
            </div>
            <Typography className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum odio cumque fugiat maxime qui recusandae asperiores blanditiis voluptatibus laboriosam quidem dignissimos eveniet saepe temporibus quis iusto, autem illum libero?
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={3}
                onClose={handleClose}
                keepMounted>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}