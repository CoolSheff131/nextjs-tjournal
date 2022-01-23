import { Button, Input } from '@material-ui/core'
import dynamic from 'next/dynamic'
import React, { ReactElement } from 'react'
import { Api } from '../../utils/api'

import styles from './WriteForm.module.scss'
const Editor = dynamic(() => import('../Editor').then(m => m.Editor), { ssr: false })

interface WriteFormProps {
    data?: any
}

export const WriteForm: React.FC<WriteFormProps> = () => {
    const [isLoading, setLoading] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [blocks, setBlocks] = React.useState([])

    const onAddPost = async () => {
        try {
            setLoading(true)
            const post = await Api().post.create({
                title,
                blocks,
            })
        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <Input value={title} onChange={e => setTitle(e.target.value)} classes={{ root: styles.titleField }} placeholder='Заголовок' />
            <div className="editor">
                <Editor onChange={arr => setBlocks(arr)} />
            </div>
            <Button disabled={isLoading} onClick={onAddPost} variant="outlined" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}
