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

