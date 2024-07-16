"use client"
import { animatePageIn } from '@/utils/animations';
import { useGSAP } from '@gsap/react'
import React, { PropsWithChildren } from 'react'

const AnimatedTemplate: React.FC<PropsWithChildren> = ({ children }) => {
    useGSAP(() => {
        animatePageIn()
    }, { scope: 'container' });

    return (
        <div>
            <div id="banner-1" className='min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/3'></div>
            <div id="banner-2" className='min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/3 w-1/3'></div>
            <div id="banner-3" className='min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/3 w-1/3'></div>
            <div id="text" className='bg-gradient-to-r from-blue-600 via-blue-400 to-blue-900 inline-block text-transparent bg-clip-text text-5xl font-bold text-center z-10 fixed left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0'>Mood up</div>
            {children}
        </div>
    )
}

export default AnimatedTemplate