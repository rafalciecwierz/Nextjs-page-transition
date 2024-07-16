"use client"
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react'

interface NavLinkProps extends LinkProps, PropsWithChildren { }

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
    const router = useRouter()

    async function onClickHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        const body = document.getElementById('root');
        body?.classList.add('page-animation');
        await sleep(200);
        router.push(href.toString());
        await sleep(400);
        body?.classList.remove('page-animation');
    }

    return (
        <Link href={href} className='group h-[24px] overflow-y-hidden px-3' onClick={onClickHandler}>
            <div className='transition ease-in-out duration-500 text-lg font-bold group-hover:text-blue-500 group-hover:-translate-y-full'>
                {children}
            </div>
            <div className='transition ease-in-out duration-500 text-lg font-bold group-hover:text-blue-500 group-hover:-translate-y-full'>
                {children}
            </div>
        </Link>
    )
}

export default NavLink