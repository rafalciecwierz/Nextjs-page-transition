'use client'
import React, { useState } from 'react'
import FramerDiv from './FramerDiv'
import { AnimatePresence } from 'framer-motion'

const FramerBoxAnimation = () => {
    const [visible, setVisible] = useState<boolean>(true)

    return (
        <div>
            <button type='button' onClick={() => setVisible(prev => !prev)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3'>
                Toggle box visibility
            </button>

            <AnimatePresence>
                {
                    visible &&
                    <FramerDiv>
                        <div className='min-h-20 min-w-20 bg-blue-400 p-10 text-3xl font-bold rounded'>
                            Magic Box
                        </div>
                    </FramerDiv>
                }
            </AnimatePresence>
        </div>
    )
}

export default FramerBoxAnimation