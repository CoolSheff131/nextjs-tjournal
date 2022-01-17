import { Typography } from '@material-ui/core'
import React from 'react'

import { Post } from '../../components/Post'
import { MainLayout } from '../../components/Post'

export const Profile = () => {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <div>
                        <Avatar
                            style={{ width: 120, height: 120, borderRadius: 6 }}
                        />
                        <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
                            Amon Bower
                        </Typography>
                    </div>
                    <div>
                        <Link>
                            <Button style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }} variant="contained">
                                <SettingsIcon />
                            </Button>
                        </Link>
                        <Button style={{ height: 42 }} variant="contained" color="primary">
                            <MesssageIcon className="mr-20" />
                            Написать
                        </Button>
                    </div>
                </div>
                <div className="d-flex mb-10 mt-10">
                    <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
                        +208
                    </Typography>
                    <Typography>2 подписчика</Typography>
                </div>
                <Typography>На проекте с 15 сен 2016</Typography>

                <Tabs>
                    <Tab label="Статьи" />
                    <Tab label="Комментарии" />
                    <Tab label="Закладки" />
                </Tabs>
            </Paper>
            <div className="d-flex align-start">
                <div className="mr-20 flex">
                    <Post />
                </div>
                <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
                    <b>Подписчики</b>
                    <div className="d-flex mt-15">
                        <Avatar
                            className="mr-10"
                        />
                        <Avatar
                            className="mr-10"
                        />
                    </div>
                </Paper>
            </div>
        </MainLayout>
    )
}
