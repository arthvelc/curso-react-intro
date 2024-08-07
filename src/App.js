// Este archivo es el componente principal de la aplicacion
import './App.css';
import React from 'react';
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
  {text: 'Llorar por no conseguir chambita', completed: true},
  {text: 'Completar el curso de React', completed: false},
  {text: 'Postular en computrabajo y occ', completed: false},
  {text: 'Consentir a mi nena hermosa (Ollincita 😍)', completed: false},
  {text: 'Amar y respetar mucho a la mujer mas hermosa que existe en el mundo (Ollincita 😍)', completed: true}
]


//Funcion que retorna el componente App
function App() {
  const [newTask, setNewTask] = React.useState("");
  const [tasks, setTasks] = React.useState(defaultTodos);

  const completedTasks = tasks.filter(tasks => !!tasks.completed).length;
  console.log('Total de tareas completadas:', completedTasks);

  const totalTasks = tasks.length;
  console.log('Total de tareas:', totalTasks);

  console.log(newTask);


  return (
    <>
      <NavBar/>
      <main className='main-container'>

      <div>
        <CreateNewTask placeholder={"Introduce una tarea"} 
        newTask = { newTask}
        setNewTask = { setNewTask }>
          <CreateButton buttonName={"Crear tarea"}/> 
        </CreateNewTask>
        
      </div>

      <div>
        <TodoBox>
          <TodoCounter completed={ completedTasks } total={totalTasks}/>
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
