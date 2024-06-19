import React from 'react'
import './Todolist.css'

const Todolist = ({todo_list,ondeleteHandler}) => {
  return (
    <div>
      <p> Your Tasks </p>
        {todo_list.map((todos,index)=>
        <div key={index} className='res'>
            <h5>{todos} </h5>
            <button className='dlt' onClick={()=>ondeleteHandler(index)}>Delete</button>
        </div>)}
    </div>
  )
}

export default Todolist