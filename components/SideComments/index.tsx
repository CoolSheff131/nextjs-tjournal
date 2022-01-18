import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined'

import styles from './SideComments.module.scss'
import data from '../../data'

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
                data.comments.popular.map((obj) => {
                    <CommentItem key={obj.id} {...obj} />
                })
            }
        </div>
    )
}