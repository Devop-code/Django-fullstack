import React from 'react'
import Link from 'next/link'
 const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-4xl text-gray-800'>404</h1>
      <p className='mt-2 text-xl text-gray-500'>Page not found </p>
        <Link href="/" legacyBehavior>
         <a className="text-blue-500 hover:text-blue-700 hover:underline-offset-1 mt-4">Back to Home</a>
        </Link>
    </div>
  )
}
export default NotFound;
