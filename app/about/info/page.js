import React from 'react'
import Link from 'next/link'

//parent page should have page.js

export default function AboutInfoPage() {
  return (
    <div>
      <h1 className='text-7xl'>
        About Page
      </h1>
      <Link href='/' className='text-2xl'>AboutInfoPage</Link>

    </div>
  )
}

