import React from 'react'
import Input from '@material-ui/core/Input'
import styles from './AddCommentForm.module.scss'
import { Button } from '@material-ui/core'
import { useAppSelectore } from '../../redux/hooks'
import { selectUserData } from '../../redux/slices/user'


interface AddCommentFormProps {
    postId: number
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId }) => {
    const isAuth = useAppSelectore(selectUserData)
    const [clicked, setClicked] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const [text, setText] = React.useState('')
    const onAddComment = async () => {

        try {
            const comment = await Api().comment.create({
                postId,
                text,
            })
            setClicked(false)
            setText('')
        } catch (error) {
            console.log(error);

        }
    }
    if (!isAuth) {
        return null
    }

    return (
        <div className={styles.form}>
            <Input disabled={isLoading} onChange={(e) => setText(e.target.value)} value={text} onFocus={() => setClicked(true)} minRows={clicked ? 5 : 1} classes={{ root: styles.fieldRoot }} placeholder='Написать комментарий' fullWidth />
            {clicked && <Button disabled={isLoading} onClick={onAddComment} className={styles.addButton} variant="outlined" color="primary">
                Опубликовать
            </Button>}
        </div>
    )
}