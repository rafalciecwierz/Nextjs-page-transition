'use client'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const GsapBox = () => {
    const ref = useRef(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useGSAP(() => {
        animationRef.current = gsap.to(ref.current, {
            rotation: 360,
            x: '40vw',
            backgroundColor: 'red',
            borderRadius: '100%',
            xPercent: -10,
            duration: 2,
            repeat: 2,
            yoyo: true,
        })

    }, [])

    const handleClick = () => {
        animationRef.current?.restart();
    }

    return (
        <div>
            <div ref={ref} className='h-20 w-20 bg-green-600'></div>
            <button type='button' onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Restart animation</button>
        </div>
    )
}

export default GsapBox