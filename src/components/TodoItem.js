import React from 'react'


const TodoItem = ({ todo, index }) => {
    return <li><strong> {index + 1} </strong> {todo.title} </li>
    
}

export default TodoItem