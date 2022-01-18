import React from 'react'

import { MainLayout } from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost'
import { Comment } from '../../components/Comment'
import { PostComments } from '../../components/PostComments'


export default function slug() {
    return (
        <MainLayout>
            <FullPost />
            <PostComments />
        </MainLayout>
    )
}
