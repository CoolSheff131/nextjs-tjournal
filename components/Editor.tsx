import React, { ReactElement } from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs'

interface EditorProps {
    onChange: (blocks: OutputData['blocks']) => void;
    initialBlocks?: OutputData['blocks'];

}

export const Editor: React.FC<EditorProps> = ({ onChange, initialBlocks }) => {
    React.useEffect(() => {
        import('@editorjs/editorjs').then(() => {
            const editor = new EditorJS({
                holder: 'editor',
                placeholder: 'Введите текст вашей статьи',
                async onChange() {
                    const { blocks } = await editor.save()
                    onChange(blocks)
                },
                data: {
                    blocks: initialBlocks
                }
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
