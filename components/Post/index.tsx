import Link from 'next/link'
import { Paper, Typography } from '@material-ui/core'
import Image from 'next/image'

import styles from './Post.module.scss'
import { PostActions } from '../PostActions'

interface PostProps {
    title: string;
    description: string;
    imageUrl?: string;
    id: number;
}

export const Post: React.FC<PostProps> = ({ id, title, description, imageUrl }) => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.tite}>
                <Link href={`/news/${id}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                {description}
            </Typography>
            {imageUrl && <img
                height={500}
                width={600}
                alt={title}
            />}
            <PostActions />
        </Paper>
    )
}