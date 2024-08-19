'use client'

// server action need to be located in server component or if seperate file used the component has to be use client

import { editTask } from '@/utils/action'
import React from 'react'

export default function EditForm({task}) {
    const {id,completed,content}= task 
  return (
    <form action={editTask} className='max-w-sm p-12 border border-base-300 rounded-lg'>
        <input type="hidden" name='id' value={id} />
        <input type="text" required defaultValue={content} name='content'  className='input input-bordered w-full'/>

        <div className="form-control my-4">
            <label htmlFor="completed" className='label cursor-pointer'>
                <span className='label-text'>Completed</span>
                <input type="checkbox" defaultChecked={completed} id='completed' name='completed'
                 className='checkbox checkbox-primary checkbox-sm' />
            </label>
        </div>
        <button type='submit' className='btn btn-sm btn-block btn-primary'>edit</button>

    </form>
  )
}
