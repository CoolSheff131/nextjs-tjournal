import { Button, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { PostActions } from '../PostActions'
import MessageIcon from '@material-ui/icons/TextsmsOutlined'
import UserAddIcon from '@material-ui/icons/PersonAddOutlined'

import styles from './FullPost.module.scss'

export const FullPost = () => {
    return (
        <Paper elevation={0} className={styles.paper}>
            <div className='container'>
                <Typography variant="h4" className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui ea quibusdam, perferendis non veritatis. Velit dignissimos reprehenderit maiores magnam id eligendi, soluta dolorem unde, quae sit totam dolores! Id!
                </Typography>
                <div>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis accusantium, impedit ratione ipsam dignissimos aperiam voluptate deserunt eos exercitationem eum placeat aut obcaecati, eaque asperiores libero nesciunt. Magni, provident.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis accusantium, impedit ratione ipsam dignissimos aperiam voluptate deserunt eos exercitationem eum placeat aut obcaecati, eaque asperiores libero nesciunt. Magni, provident.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis accusantium, impedit ratione ipsam dignissimos aperiam voluptate deserunt eos exercitationem eum placeat aut obcaecati, eaque asperiores libero nesciunt. Magni, provident.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis accusantium, impedit ratione ipsam dignissimos aperiam voluptate deserunt eos exercitationem eum placeat aut obcaecati, eaque asperiores libero nesciunt. Magni, provident.
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veritatis accusantium, impedit ratione ipsam dignissimos aperiam voluptate deserunt eos exercitationem eum placeat aut obcaecati, eaque asperiores libero nesciunt. Magni, provident.
                    </Typography>
                    <div style={{ width: 250, marginLeft: -14 }}>
                        <PostActions />
                    </div>
                    <div className="d-flex justify-between align-center mt-30 mb-30">
                        <div className={styles.userInfo}>
                            <img alt="Avatar" />
                            <b>Donnie Darko</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button variant="contained" className="mr-15">
                                <MessageIcon />
                            </Button>
                            <Button variant="contained">
                                <UserAddIcon />
                                <b className="ml-10">Подписаться</b>
                            </Button>
                        </div>


                    </div>
                </div>
            </div>

        </Paper>
    )
}