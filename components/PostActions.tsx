import React, { CSSProperties } from 'react'

import {
    ModeCommentOutlined as CommentIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

const styles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '5',
    listStyle: 'none',
    padding: '0',
    margin: '0',
}

export const PostActions: React.FC = () => {
    return (
        <ul style={styles}>
            <li>
                <IconButton>
                    <CommentIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </li>
        </ul>
    )
}
