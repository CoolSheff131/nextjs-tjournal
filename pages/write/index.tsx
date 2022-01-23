import { TextField } from '@material-ui/core'
import { GetServerSideProps, NextPage } from 'next'
import React, { ReactElement } from 'react'
import { WriteForm } from '../../components/WriteForm'
import { MainLayout } from '../../layouts/MainLayout'
import { Api } from '../../utils/api'



const WritePage: NextPage = () => {
    return (
        <MainLayout className='main-layout-white' hideComments hideMenu>
            <WriteForm />

        </MainLayout>
    )
}



export default WritePage;