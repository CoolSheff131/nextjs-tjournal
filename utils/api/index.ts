import axios from "axios";
import { GetServerSidePropsContext, NextPageContext } from "next";
import Cookies, { parseCookies } from "nookies";
import { CommentApi } from "./comment";
import { PostApi } from "./post";
import { UserApi } from "./user";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
    post: ReturnType<typeof PostApi>
    comments: ReturnType<typeof CommentApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx? Cookies.get(ctx) : parseCookies()
    const token = cookies.token
    const instance = axios.create({
        baseURL: 'http://localhost:7777',
        headers:{
            Authorization: 'Bearer' + token,
        },
    })
    const apis = {
        user: UserApi,
        post: PostApi,
        comment: CommentApi,
    }

    const result = Object.entries(apis).reduce((prev, [key, f]) => {
        return {
            ...prev,
            [key]: f(instance)
        }
    }, {} as ApiReturnType)

    return result
}