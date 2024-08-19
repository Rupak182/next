'use client'  // to display user that some action pending

import React, { useEffect } from 'react'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { createTask } from '@/utils/action'
import { createTaskCustom } from '@/utils/action'
import {useFormStatus,useFormState} from 'react-dom'
import toast from 'react-hot-toast'

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


const SubmitBtn = ()=>{
    const {pending} = useFormStatus();

    return (    
        <button type='submit' className='btn btn-primary join-item ' disabled={pending}>
            {pending ? 'please wait...' : 'create task'}
        </button>
    )

}

const initialState = {
    message:null,
}



export default function TaskFormCustom() {
    const [state, formAction] = useFormState(createTaskCustom,initialState)
    useEffect(()=>{
        if(state.message==='error'){
            toast.error('there was an error');
            return;
        }
    
        if(state.message==='success'){
            toast.success('task created');
            return;
        }   
    
        },[state])
    return (
        <form action={formAction}>
            {/* {state.message ? <p className='mb-2 '>{state.message}</p>:null} */}
            <div className="join w-full">
                <input type="text" className='input input-bordered join-item w-full' placeholder='type here' name='content' required />
                <SubmitBtn/>
            </div>
        </form>
    )
}
