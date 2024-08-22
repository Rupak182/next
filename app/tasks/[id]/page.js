import EditForm from '@/components/EditForm'
import Link from 'next/link'
import React from 'react'
import { getTask } from '@/utils/action'
// export const dynamic = 'force-dynamic'  //add if you get unsynchronized tasks

export default async function SingleTaskPage({params}) {
    const task = await  getTask(params.id)
  return (
    <>
        <div className="mb-16">
            <Link href='/tasks' className='btn btn-accent '>back to tasks</Link>
        </div>
        <EditForm task={task}/>

    </>
  )
}
