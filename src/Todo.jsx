import React from 'react'
//import { ACTION } from './App.jsx'
export default function Todo({todo}) {
  return (
    <div>


      <span style = {{color:todo.complete ? '#AAA' : '#000'}}>
        {todo.name}
      </span>



      <button onClick={()=>dispatch({type: ACTION.TOGGLE_TODO,
      payload: { id: todo.id }

      })}>  Disable</button>
      <button onClick={()=>dispatch({type: ACTION.DELETE_TODO,
      payload: { id: todo.id }

      })}> Delete</button>

      <button>ADD</button>
    </div>
  )
}


