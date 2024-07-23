
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateButton } from './CreateButton';

const defaultTodos = [
  {text: 'Llorar por no conseguir chambita', completed: false},
  {text: 'Completar el curso de React', completed: false},
  {text: 'Postular en computrabajo y occ', completed: false},
  {text: 'Consentir a mi nena hermosa (Ollincita 😍)', completed: false}
]

function App() {
  return (
    <div className="App">
      <TodoCounter completed = {5} total = {10} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => <TodoItem key = {todo.text} text = {todo.text} completed = {todo.completed}/> )}
      </TodoList>

       <CreateButton/> 
    </div>
  );
}

export default App;
