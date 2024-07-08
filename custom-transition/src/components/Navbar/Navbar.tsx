import Image from 'next/image'
import NavLink from './NavLink'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex items-center w-full h-16 p-3 bg-white'>
            <div>
                <Link href={"/"}>
                    <Image src="next.svg" width={128} height={64} alt='Logo' />
                </Link>
            </div>
            <div className='flex mx-10'>
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/about"}>About</NavLink>
            </div>
        </div>
    )
}

export default Navbar