import React from 'react'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { createTask } from '@/utils/action'

// formData is web api (not specific to next js)

// const createTask = async (formData) =>{
//     'use server' // why already server component ??
//     const content = formData.get('content')  // see name
//     await prisma.task.create({
//         data:{
//             content,
//         }
//     });

//     revalidatePath('/tasks');  // page is static hence we need to see the latest changes we need to revalidate the path
// }

// to access input value we need add name parameter
// other ways also to invoke server action (this approach functionality even without js)




export default function TaskForm() {
    return (
        <form action={createTask}>
            <div className="join w-full">
                <input type="text" className='input input-bordered join-item w-full' placeholder='type here' name='content' required />
                <button type='submit' className='btn btn-primary join-item'>create task</button>
            </div>
        </form>
    )
}
