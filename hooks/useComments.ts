type UseCommentsProps = {
    setComments: any;
    comments: CommentItem[]
}

export const useComments = (postId?: number): UseCommentsProps => {
    const [comments, setComments] = React.useState<CommentItem[]>([])
    React.useEffect(() => {
        (async () => {
            try {
                const comments = await Api().comments.getAll(postId)
                setComments(comments)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return {comments,setComments}
}