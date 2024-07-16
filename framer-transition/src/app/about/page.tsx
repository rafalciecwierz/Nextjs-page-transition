import Content from '@/components/Content/Content'
import FramerDiv from '@/components/Framer/FramerDiv'
import BaseHeading from '@/components/_Base/BaseHeading'
import BaseWrapper from '@/components/_Base/BaseWrapper'
import React from 'react'

const AboutPage = () => {
    return (
        <BaseWrapper>
            <FramerDiv>
                <Content title="About Page Transition" withoutImage />
            </FramerDiv>
        </BaseWrapper>
    )
}

export default AboutPage