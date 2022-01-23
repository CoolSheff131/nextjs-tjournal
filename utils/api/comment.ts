import { AxiosInstance } from "axios"

type CreateCommentDto = {
    postId: number;
    text: string;
}

export const CommentApi = (instance: AxiosInstance) => ({
    async getAll(){
        const {data} = await instance.get
        return data
    },
    async create(dto: CreateCommentDto){
        const {data} = await instance.post<CreateCommentDto, {data: CommentItem}>('/comments',dto)
        return data
    },
})