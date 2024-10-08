'use server'

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';  // fixed 
import {z} from 'zod'

export const getAllTasks = async ()=>{
   return  prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export const createTask = async (formData)=>{
    const content = formData.get('content')  // see name
    await prisma.task.create({
        data:{
            content,
        }
    });

    revalidatePath('/tasks')
}

export const createTaskCustom = async (prevState,formData)=>{
    // await new Promise((resolve, reject) => {setTimeout(resolve,2000)})

    const content = formData.get('content')  // see name
    const Task = z.object({
        content:z.string().min(5)
    })

    try {
        Task.parse({content})
        await prisma.task.create({
            data:{
                content,
            }
        });
    
        revalidatePath('/tasks')
        return {message:"success"}

    } catch (error) {
        console.log(error)
        // can't return error
        return {message:"error"}
    }
}

export const deleteTask = async (formData)=>{
//    await new Promise((resolve, reject) => {setTimeout(resolve,2000)})
    const id = formData.get('id');
    await prisma.task.delete({
        where:{id : id},
    })

    revalidatePath('/tasks')
}

export const getTask = async (id )=>{
    return prisma.task.findUnique({
        where:{
            id,
        }
    })
}

export const editTask = async (formData)=>{
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed');
    await prisma.task.update({
        where:{
            id:id
        },
        data:{
            content,
            completed:completed ==='on' ?true : false,  // check

        }
    })

    redirect('/tasks')  // check
}