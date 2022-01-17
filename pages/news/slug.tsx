import React from 'react'

import { MainLayout } from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost'
import { Comment } from '../../components/Comment'

export const slug = () => {
    return (
        <MainLayout>
            <FullPost />
            <Paper elevation={0} className="mt-40 p-30">
                <Typography variant="h6" className="mb-20">
                    42 комментарии
                </Typography>
                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <div className="mb-20" />
                <Comment />
                <Comment />
                <Comment />
            </Paper>
        </MainLayout>
    )
}
