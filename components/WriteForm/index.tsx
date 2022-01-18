import { Button, Input } from '@material-ui/core'
import dynamic from 'next/dynamic'
import React, { ReactElement } from 'react'

import styles from './WriteForm.module.scss'
const Editor = dynamic(() => import('../Editor').then(m => m.Editor), { ssr: false })

interface WriteFormProps {
    title?: string
}

export const WriteForm: React.FC<WriteFormProps> = ({ title }) => {

    return (
        <div>
            <Input classes={{ root: styles.titleField }} placeholder='Заголовок' defaultValue={title} />
            <div className="editor">
                <Editor />
            </div>
            <Button variant="outlined" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}
