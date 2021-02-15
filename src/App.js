import React, { useEffect } from 'react'
import './App.css';
import TodoList from './components/TodoList'
import Context from './context'
import Loader from './Loader'
import AddTodo from './components/AddTodo'


// const AddTodo = React.lazy(() => new Promise(resolve => {
//   setTimeout(() => {
//       resolve(import('./components/AddTodo'))
//   }, 3000)
// }))

function App() {

  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() =>{
          setTodos(todos)
          setLoading(false)
        }, 2000 )
        
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1 className='g'>ДелайДела </h1>

        {/* <React.Suspense fallback={<p>Loading...</p>}> */}
          <AddTodo onCreate={addTodo} />
        {/* </React.Suspense> */}
        

        {loading && <Loader />}
        {todos.length ? (
         <TodoList todos={todos} onToggle={toggleTodo} /> 
          ) : (
            loading ? null : (<p className='just-text'> Бездельник...</p>)
          ) }
      </div>
    </Context.Provider>
  );
}

export default App;
