import React from 'react'
import { Paper, Typography, Tabs, Tab, Divider } from "@material-ui/core"
import { AddCommentForm } from "../AddCommentForm"
import { Comment } from '../Comment'
import data from '../../data'
import { Api } from '../../utils/api'
import { CommentItem } from '../../utils/api/types'
import { useComments } from '../../hooks/useComments'

// type IComment = {
//     text: string;
//     id: number;
//     createdAt: string;
//     user: {
//         fullname: string;
//         avatarUrl: string;
//     }
// }

interface PostCommentsProps {
    postId: number;
}

export const PostComments: React.FC<PostCommentsProps> = ({ postId }) => {
    const userData = useAppSelectore(selectUserData)
    const [activeTab, setActiveTab] = React.useState(0)
    const { comments, setComments } = useComments(postId)

    const onAddComment = (obj: CommentItem) => {
        setComments(prev => prev, obj)
    }
    const onRemoveComment = (obj: number) => {
        setComments((prev) => prev.filter(obj => obj.id !== id))
    }
    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className="container">
                <Typography variant="h6" className="mb-20">
                    42 комментарии
                </Typography>
                <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className="mt-20" value={activeTab} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                {userData && <AddCommentForm onSuccessAdd={onAddComment} postId={postId} />}
                <div className="mb-20" />
                {
                    comments.map((obj) => <Comment key={obj.id} user={obj.user} text={obj.text} createdAt={obj.createdAt} currentUserId={user.id} onRemove={onRemoveComment} />)
                }
            </div>

        </Paper>
    )
}