import { OutputData } from "@editorjs/editorjs";
import axios, { AxiosInstance } from "axios";
import { CreateUserDto, LoginDto, PostItem, ResponseUser } from "./types";

type CreatePostDto = {
    title: string;
    blocks: OutputData['blocks'];
}


export const PostApi= (instance: AxiosInstance)=>({
    async getAll(){
        const {data} = await instance.get<PostItem[]>('/posts')
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