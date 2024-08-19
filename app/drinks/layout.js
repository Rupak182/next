import React from 'react'

export default function DrinksLayout({children}) {
  return (
    <div className='max-w-6xl'>
      <div className='mockup-code mb-8'>
        <pre data-prefix="$">
            <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
        {children}
    </div>
  )
}
