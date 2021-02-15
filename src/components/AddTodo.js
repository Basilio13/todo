import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './AddTodo.css'


function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')
    function submitHandler(event) {
        event.preventDefault()

        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form className='form-default' onSubmit={submitHandler}>
            <input className='input-line'  {...input.bind} />
            <button type='submit' className='button-add'> &gt; </button>
        </form>
    )
}

AddTodo.propTypes = {
    // onChange: PropTypes.func.isRequired
}

export default AddTodo