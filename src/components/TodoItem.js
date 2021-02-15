import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import './TodoItem.css'

const TodoItem = ({ todo, index, onChange }) => {
    const { removeTodo } = useContext(Context)  
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li className='item'>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    className='input-default'
                    onChange={() => onChange(todo.id)}>
                </input>

                <strong>{index + 1}. &nbsp; </strong>
                {todo.title}
            </span>

            <button className='button-default' onClick={() => removeTodo(todo.id)}>🗑️</button>
        </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem