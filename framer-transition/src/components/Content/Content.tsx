import React, { Suspense } from 'react'
import BaseHeading from '../_Base/BaseHeading'
import Image from 'next/image'

const unsplashPhoto = "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

interface ContentProps {
    title: string;
    withoutImage?: boolean;
}
const Content: React.FC<ContentProps> = ({ title, withoutImage = false }) => {
    return (
        <div className='w-full flex my-5'>
            <div className={`${withoutImage ? "w-full" : "w-1/2"} p-5 py-10`}>
                <BaseHeading>{title}</BaseHeading>
                <p className='text-lg pt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus placeat fuga vel numquam? Fugit voluptatibus voluptas tempora optio, libero reiciendis odit dolorem animi. Perspiciatis quae iure est adipisci mollitia.</p>
                <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>CTA button</button>
            </div>
            {!withoutImage &&
                <div className={`w-1/2 min-h-[640px]`}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Image src={unsplashPhoto} alt='Photo' width={640} height={640} priority className='rounded-3xl' />
                    </Suspense>
                </div>
            }
        </div >
    )
}

export default Content