
import GsapBox from '@/components/Gsap/GsapBox'
import BaseHeading from '@/components/_Base/BaseHeading'
import BaseWrapper from '@/components/_Base/BaseWrapper'
import React from 'react'

const GSAPPage = () => {
    return (
        <BaseWrapper>
            <div>
                <BaseHeading>
                    GSAP Page
                </BaseHeading>
                <GsapBox />
            </div>
        </BaseWrapper>
    )
}

export default GSAPPage