import React, { useState } from 'react'
import './ImageGenerator.css'
import Todolist from '../Todolist';


const ImageGenerator = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(task);
    const newTodo = [...todo, task];
    setTodo(newTodo);
    setTask("");
  }
 
  const ondeleteHandler = (indexValue) => {
   const newTodo=todo.filter((todos,index)=>index!==indexValue)
   setTodo(newTodo);
  }


  return (
    <div className='first'>
      <div className="heading">
        <h3>Todo Management Application</h3>
      </div>
      <div className="second">
        <form onSubmit={onSubmitHandler}>
          <input className='ha' type="text" name="task" value={task} onChange={onChangeHandler} />
          <input className='submit' type="submit" value='Add' name='Add' />
        </form>
      </div>
      <div className="result">
      <Todolist todo_list={todo} ondeleteHandler={ondeleteHandler}/>
      </div>
    </div>
  )
}

export default ImageGenerator