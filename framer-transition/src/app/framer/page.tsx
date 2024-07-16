import FramerBoxAnimation from '@/components/Framer/FramerBoxAnimation'
import BaseHeading from '@/components/_Base/BaseHeading'
import BaseWrapper from '@/components/_Base/BaseWrapper'
import React from 'react'


const FramerPage = () => {
    return (
        <BaseWrapper>
            <div className='min-w-[500px]'>
                <BaseHeading>
                    FramerPage
                </BaseHeading>
                <div>
                    Amination example
                    <FramerBoxAnimation />
                </div>
            </div>
        </BaseWrapper>
    )
}

export default FramerPage