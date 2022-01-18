import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined'

import styles from './SideComments.module.scss'

export const comments = [
    {
        id: 1,
        user: {
            fullname: 'Vasua'
        },
        text: 'lorem12',
        post: {
            title: 'Kakaya y vas doma',
        },
        createdAt: new Date().toString(),
        avatarUrl: 'https://sun9-31.userapi.com/impg/wXP1C90C3kSmFBqJBJ4TUhEbb4C1wllMatsmPA/6gZd54NX0FY.jpg?size=1080x1080&quality=96&sign=49e48432602b7ac434f4d2bdf2b57b97&type=album',
    },
    {
        id: 2,
        user: {
            fullname: 'Vasua'
        },
        text: 'lorem12',
        post: {
            title: 'Kakaya y vas doma',
        },
        createdAt: new Date().toString(),
        avatarUrl: 'https://sun9-31.userapi.com/impg/wXP1C90C3kSmFBqJBJ4TUhEbb4C1wllMatsmPA/6gZd54NX0FY.jpg?size=1080x1080&quality=96&sign=49e48432602b7ac434f4d2bdf2b57b97&type=album',
    },
    {
        id: 3,
        user: {
            fullname: 'Vasua'
        },
        text: 'lorem12',
        post: {
            title: 'Kakaya y vas doma',
        },
        createdAt: new Date().toString(),
        avatarUrl: 'https://sun9-31.userapi.com/impg/wXP1C90C3kSmFBqJBJ4TUhEbb4C1wllMatsmPA/6gZd54NX0FY.jpg?size=1080x1080&quality=96&sign=49e48432602b7ac434f4d2bdf2b57b97&type=album',
    },
    {
        id: 4,
        user: {
            fullname: 'Vasua'
        },
        text: 'lorem12',
        post: {
            title: 'Kakaya y vas doma',
        },
        createdAt: new Date().toString(),
        avatarUrl: 'https://sun9-31.userapi.com/impg/wXP1C90C3kSmFBqJBJ4TUhEbb4C1wllMatsmPA/6gZd54NX0FY.jpg?size=1080x1080&quality=96&sign=49e48432602b7ac434f4d2bdf2b57b97&type=album',
    },
]

interface CommentItemProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img />
                <a>
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={styles.text}>{text}</p>
            <a>
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    )
}

export const SideComments = () => {
    return (
        <div className={styles.root}>
            <h3>
                Комментарии <ArrowRightIcon />
            </h3>
            {
                comments.map((obj) => {
                    <CommentItem key={obj.id} {...obj} />
                })
            }
        </div>
    )
}