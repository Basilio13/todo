import React from 'react'
import TodoItem from './TodoItem'

import './TodoList.css'

const TodoList = (props) => {
    return(
        <ul className='list-default'>
           {props.todos.map((todo, index) => {
               return <TodoItem todo={todo} key={todo.id} index={index} />
           })}
            </ul>
    )
}

export default TodoList