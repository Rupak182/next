'use client'
import React from 'react'
import { deleteTask } from '@/utils/action'
import { useFormStatus } from 'react-dom'


const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (<button className='btn btn-xs btn-error' disabled={pending}>
    {pending ? 'pending...' : 'delete'}
  </button>
  )
}

//value is hardcoded
export default function DeleteForm({ id }) {
  return (
    <form action={deleteTask}>
      <input type="hidden" name='id' value={id} />
      <SubmitButton />
    </form>
  )
}
