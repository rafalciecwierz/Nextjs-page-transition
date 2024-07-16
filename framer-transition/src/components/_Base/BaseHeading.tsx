import React from 'react'

const BaseHeading: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <h1 className="text-3xl font-bold">{children}</h1>
    )
}

export default BaseHeading