
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateButton } from './CreateButton';

function App() {
  return (
    <div className="App">
      <TodoCounter completed = {5} todos = {10} />
      <TodoSearch/>

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

       <CreateButton/> 
    </div>
  );
}

export default App;
