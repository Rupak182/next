import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'
import React from 'react'

export default function TasksPage() {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom/>
      <TaskList/>

    </div>
)
}

