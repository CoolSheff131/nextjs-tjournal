import { OutputData } from "@editorjs/editorjs";
import axios, { AxiosInstance } from "axios";
import { CreateUserDto, LoginDto, PostItem, ResponseUser } from "./types";

type CreatePostDto = {
    title: string;
    blocks: OutputData['blocks'];
}


type SearchPostDto = {
    title?: string;
    body?: string;
    views?: 'DESC' | 'ASC';
    limit?: number;
    take?: number;
    tag?: string;
}


export const PostApi= (instance: AxiosInstance)=>({
    async getAll(){
        const {data} = await instance.get<PostItem[]>('/posts')
        return data
    },
    async search(query: SearchPostDto){
        const {data} = await instance.get<{items: PostItem[], total: number}>('/posts/search',{params: query})
        return data
    },
    async getOne(id:number){
        const { data }= await instance.get<PostItem>(`/posts/${id}`)
    }, 
    async create(dto: CreatePostDto){
        const {data} = await instance.post<CreatePostDto, {data: PostItem}>('/posts',dto)
        return data
    },
    async update(id: number, dto: CreatePostDto){
        const {data} = await instance.patch<CreatePostDto, {data: PostItem}>(`/posts/${id}`,dto)
        return data
    },

})