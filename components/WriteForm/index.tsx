import { Button, Input } from '@material-ui/core'
import dynamic from 'next/dynamic'
import React, { ReactElement } from 'react'
import { Api } from '../../utils/api'
import { PostItem } from '../../utils/api/types'

import styles from './WriteForm.module.scss'
const Editor = dynamic(() => import('../Editor').then(m => m.Editor), { ssr: false })

interface WriteFormProps {
    data?: PostItem
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
    const router = useRouter()
    const [isLoading, setLoading] = React.useState(false)
    const [title, setTitle] = React.useState(data?.title || '')
    const [blocks, setBlocks] = React.useState(data?.body || [])

    const onAddPost = async () => {
        try {
            setLoading(true)
            const obj = {
                title,
                blocks,
            }
            if (!data) {
                const post = await Api().post.create(obj)
                router.push(`/write/${post.id}`)
            } else {
                await Api().post.update(data.id, obj)
            }
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
                <Editor initialBlocks={data.body} onChange={arr => setBlocks(arr)} />
            </div>
            <Button disabled={isLoading || !blocks.length || !title} onClick={onAddPost} variant="outlined" color="primary">
                {data ? 'Сохранить' : 'Опубликовать'}
            </Button>
        </div>
    )
}
