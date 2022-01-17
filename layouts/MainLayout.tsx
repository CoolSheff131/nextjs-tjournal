import React from 'react'

interface MainLayoutProps {
    hideComments?: boolean;
    contentFullWidth?: boolean;
    className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
    children,
    contentFullWidth,
    hideComments,
    className,
}) => {
    return (
        <div className={clsx('wrapper', className)}>
            <div className="leftSide">
                <LeftMenu />
            </div>
            <div className={clsx('content', { 'content-full': contentFullWidth })}>{children}</div>
            {
                !hideComments && (
                    <div className="rightSide">
                        <SideComments />
                    </div>
                )
            }
        </div>
    )
}
