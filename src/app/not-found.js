import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center text-rose-600 h-screen text-9xl font-sans font-extrabold'>
            <h1 >404</h1>
            <p className='text-xl font-serif mt-2 bottom-0'>Are you Lost ?</p>
            <Link href={'/'}><button className='bg-rose-600 top-0 text-white px-5 py-2.5 text-lg font-serif rounded-md hover:bg-white hover:text-rose-600 duration-500 hover:tracking-widest border hover:border-rose-600'>Back to Home</button></Link>
        </div>
    )
}

export default ErrorPage
