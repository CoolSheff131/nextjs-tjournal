import { Button } from '@material-ui/core'
import React from 'react'

interface MainProps {
    onOpenLogin: () => void;
}

export const Main: React.FC<MainProps> = ({ onOpenLogin }) => {
    return (
        <>
            <div>
                <Button className="mb-10" variant="contained" fullWidth>ВКонтакте</Button>
                <Button className="mb-10" variant="contained" fullWidth>Google</Button>
                <Button onClick={onOpenLogin} className="mb-10" variant="contained" fullWidth>Через почту</Button>
            </div>
            <div>
                <Button className="mb-10" variant="contained" fullWidth>ВКонтакте</Button>
                <Button className="mb-10" variant="contained" fullWidth>Google</Button>
                <Button className="mb-10" variant="contained" fullWidth>Через почту</Button>
            </div>
        </>
    )
}
