'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

// Pass the children to the provider and provider takes the children and wrap something around children
export default function Providers({children}) {
  return (
    <>
      <Toaster/>
      {children}
    </>
  )
}
