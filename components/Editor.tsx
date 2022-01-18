import React, { ReactElement } from 'react'
import EditorJS from '@editorjs/editorjs'

export const Editor: React.FC = () => {
    React.useEffect(() => {
        import('@editorjs/editorjs').then(() => {
            const editor = new EditorJS({
                holder: 'editor',
                placeholder: 'Введите текст вашей статьи'
            })
            return () => (
                editor.isReady.then(() => {
                    editor.destroy();
                }).catch(e => console.error('ERR editor cleanup', e))
            )
        })
    }, [])
    return (
        <div id="editor" />
    )
}
