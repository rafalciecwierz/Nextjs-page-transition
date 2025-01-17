import React, { PropsWithChildren } from 'react'

const BaseWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
    )
}

export default BaseWrapper