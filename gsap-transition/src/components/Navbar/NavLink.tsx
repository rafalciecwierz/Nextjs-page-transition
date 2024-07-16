"use client"
import { animatePageOut } from '@/utils/animations';
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren } from 'react'

interface NavLinkProps extends LinkProps, PropsWithChildren { }

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (pathname !== href) {
            animatePageOut(href.toString(), router);
        }
    }

    return (
        <Link href={href} className='group h-[24px] overflow-y-hidden px-3' onClick={handleClick}>
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