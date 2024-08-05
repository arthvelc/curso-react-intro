// Este archivo es el componente principal de la aplicacion
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateButton } from './CreateButton';
import { CreateNewTask } from './CreateNewTask';
import { TodoBox } from './TodoBox';
import { ButtonDelete } from './ButtonDelete';
import { NavBar } from './NavBar';

//Array de objetos con las tareas por defecto
const defaultTodos = [
  {text: 'Llorar por no conseguir chambita', completed: false},
  {text: 'Completar el curso de React', completed: false},
  {text: 'Postular en computrabajo y occ', completed: false},
  {text: 'Consentir a mi nena hermosa (Ollincita 😍)', completed: false},
  {text: 'Amar y respetar mucho a la mujer mas hermosa que existe en el mundo (Ollincita 😍)', completed: false}
]


//Funcion que retorna el componente App
function App() {
  return (
    <>
      <NavBar/>
      <main className='main-container'>

      <div>
        <CreateNewTask placeholder={"Introduce una tarea"} 
        >
          <CreateButton buttonName={"Crear tarea"}/> 
        </CreateNewTask>
        
      </div>

      <div>
        <TodoBox>
          <TodoCounter completed={5} total={10} />
          <TodoSearch placeholder={"Busca tu tarea"} />
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                children={<ButtonDelete />}
              ></TodoItem>
            ))}
          </TodoList>
        </TodoBox>
      </div>  

      </main>


      
      
    </>
  );
}

export default App;
