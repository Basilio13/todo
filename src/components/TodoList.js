import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import './TodoList.css'

const TodoList = (props) => {
    return(
        <ul className='list-default'>
           {props.todos.map((todo, index) => {
               return(
                <TodoItem 
               todo={todo} 
               key={todo.id}
               index={index}  
               onChange={props.onToggle}
            />
               )
           })}
            </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    index: PropTypes.number,
    onToggle: PropTypes.func.isRequired
}

export default TodoList