'use client'

import React from 'react'

export default function error(error) {
    console.log(error);
    
  return (
    <div>
      {error.error.message}
    </div>
  )
}
