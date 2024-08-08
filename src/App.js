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
import { NavBar } from './NavBar';

//Array de objetos con las tareas por defecto
const defaultTodos = [
  {text: 'Llorar por no conseguir chambita', completed: true},
  {text: 'Completar el curso de React', completed: false},
  {text: 'Postular en computrabajo y occ', completed: true},
  {text: 'Consentir a mi nena hermosa (Ollincita 😍)', completed: false},
  {text: 'Amar y respetar mucho a la mujer mas hermosa que existe en el mundo (Ollincita 😍)', completed: true}
]


//Funcion que retorna el componente App
function App() {
  const [newTask, setNewTask] = React.useState("");
  //Estas son las tareas que se van a mostrar en la lista
  const [tasks, setTasks] = React.useState(defaultTodos);
  //Este es el valor que buscaré dentro de la lista de tareas
  const [searchedTasks, setSearchedTasks] = React.useState("");
  

  const completedTasks = tasks.filter(tasks => !!tasks.completed).length;
  const totalTasks = tasks.length;
  const searchedTasksResult = tasks.filter(task => task.text.toLowerCase().includes(searchedTasks.toLowerCase()));

  tasks.forEach(task => {
    console.log(task.completed);
  })

  const taskDone = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.text === text);

    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
  }


  return (
    <>
      <NavBar/>
      <main className='main-container'>

      <div>
        <CreateNewTask placeholder={"Introduce una tarea"} 
        newTask = { newTask }
        setNewTask = { setNewTask }>
          <CreateButton buttonName={"Crear tarea"}/> 
        </CreateNewTask>
        
      </div>

      <div>
        <TodoBox>
          <TodoCounter completed={ completedTasks } total={totalTasks}/>
          <TodoSearch placeholder={"Busca tu tarea"} 
          searchedTasks = { searchedTasks }
          setSearchedTasks = { setSearchedTasks }
          />
          <TodoList>
            {searchedTasksResult.map( task => (
              <TodoItem
                key={task.text}
                text={task.text}
                completed={task.completed}
                OnComplete = { ()  => taskDone(task.text) }
              
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
