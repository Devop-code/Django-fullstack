import React from 'react'
import TaskForm from "@/app/components/TaskForm"
import TaskList from "@/app/components/TaskList"
const page = () => {
  return (
    <div>
        <TaskForm/><br/>
        <TaskList/>
    </div>
  )
}

export default page