import './App.css';
import TodoList from './components/TodoList'

function App() {

  const todos = [
    {id: 1, completed: false, title: 'Заказать питсу'},
    {id: 2, completed: false, title: 'Дождаться питсу'},
    {id: 3, completed: false, title: 'Съесть питсу'}
  ]

  return (
    <div className="App">
      <h1>ДелайДела</h1>
      <TodoList 
        todos={todos}
      />
    </div>
  );
}

export default App;
