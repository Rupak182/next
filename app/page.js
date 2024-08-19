import Link from 'next/link'
import React from 'react'

export default function Homepage() {
  console.log("homepage")
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>
        Next.js Tutorial
      </h1>
      <Link href='/client' className='btn btn-accent'>get started</Link>
    </div>
  )
}

