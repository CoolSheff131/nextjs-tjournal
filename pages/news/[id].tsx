import React from 'react'

import { MainLayout } from '../../layouts/MainLayout'
import { FullPost } from '../../components/FullPost'
import { Comment } from '../../components/Comment'
import { PostComments } from '../../components/PostComments'
import { NextPage, GetServerSideProps } from 'next'
import { Api } from '../../utils/api'
import { PostItem } from '../../utils/api/types'

interface FullPostPageProps {
    post: PostItem;
}

const FullPostPage: NextPage<FullPostPageProps> = ({ post }) => {
    return (
        <MainLayout>
            <FullPost title={post.title} blocks={post.body} />
            <PostComments />
        </MainLayout>
    )
}



export const getServerSideProps: GetServerSideProps = async ctx => {
    try {
        const id = ctx.params.id
        const post = await Api(ctx).post.getOne(+id)
        const user = await Api(ctx).user.getMe()


        return {
            props: {
                post
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {}, redirect: {
                destination: '/',
                permanent: false,
            }

        }
    }
}

export default FullPostPage