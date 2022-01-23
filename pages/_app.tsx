import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

import { Header } from '../components/Header'

import React, { Component } from 'react'
import { theme } from '../theme'

import '../styles/globals.scss'
import 'macro-css'
import { Provider } from 'react-redux'
import { store, wrapper } from '../redux/store'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>TJournal</title>
                <link rel="icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />

                <Header />
                <Component {...pageProps} />

            </MuiThemeProvider>
        </>
    )
}
export default wrapper.withRedux(App)