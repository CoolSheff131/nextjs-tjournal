import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import { Post } from '../components/Post'
import { MainLayout } from '../layouts/MainLayout'
import { setUserData } from '../redux/slices/user'
import { wrapper } from '../redux/store'
import { UserApi } from '../utils/api'



export const Home = () => {
    return (
        <MainLayout>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ctx => {
    const { authToken } = parseCookies(ctx)
    try {
        const userData = await UserApi.getMe(authToken)
        store.dispatch(setUserData(userData))
    } catch (error) {
        console.log(error);

    }
    return { props: {} }
})