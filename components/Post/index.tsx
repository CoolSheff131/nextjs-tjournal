import Link from 'next/link'
import { Paper, Typography } from '@material-ui/core'
import Image from 'next/image'

import styles from './Post.module.scss'
import { PostActions } from '../PostActions'

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.tite}>
                <Link>
                    <a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, saepe aspernatur itaque sequi dolores provident! Nam, eaque eligendi animi aspernatur, asperiores vel recusandae corrupti aperiam sequi voluptatum nisi, quam dolore.
                    </a>
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora adipisci voluptates vel dolores odit quaerat aperiam ipsa laborum et, illum sed, necessitatibus perspiciatis blanditiis pariatur odio alias? Dolorem, porro?
            </Typography>
            <Image
                height={500}
                width={600}
            />
            <PostActions />
        </Paper>
    )
}