import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href={"/"}>
            <Image
            src="/navbarLogo.svg"
            alt="logo"
            width={50}
            height={50}
            className='object-contain'
            />
            </Link>

            <Link href="/">
                <button className="mt-4 p-3 rounded-md leading-4 font-bold text-white transition-colors duration-200 transform bg-sky-900 hover:bg-sky-950  focus:outline-none">Log in</button>
            </Link>
        </nav>
    </header>
    )
}

export default NavBar