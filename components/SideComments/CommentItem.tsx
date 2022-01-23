import { Avatar } from '@material-ui/core'
import Link from 'next/link'
import { PostItem } from '../../utils/api/types'
import styles from './SideComments.module.scss'

interface CommentItemProps {
    user: ResponseUser;
    text: string;
    post: PostItem;;
}

export const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <Avatar style={{ marginRight: 10 }} />
                <Link href={`/profile/${user.id}`}>
                    <a>
                        <b>{user.fullName}</b>
                    </a>
                </Link>
            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${post.id}`}>
                <a>
                    <span className={styles.postTitle}>{post.title}</span>
                </a>
            </Link>
        </div>
    )
}