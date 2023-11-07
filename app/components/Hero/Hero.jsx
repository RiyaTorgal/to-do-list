import React from 'react'
import "./Hero.css"
import Link from 'next/link'

const Hero = () => {
    return (
    <div className='hero mt-40'>
        <div className='flex-1 p-4 padding-x'>
            <h1 className='hero__title text-sky-950'>
                <p>Daily Task Manager Website</p>
            </h1>
            <p className='hero__subtitle text-sky-800'>
                A website to help you manage your daily tasks in a more systematic manner
            </p>
            <Link href="/">
        <button className="mt-4 p-3 rounded-md leading-5 font-bold text-white transition-colors duration-200 transform bg-sky-900 hover:bg-sky-950  focus:outline-none">Create List</button>
        </Link>
        </div>
    </div>
    )
}

export default Hero