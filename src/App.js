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
  {text: 'Consentir a mi nena hermosa (Ollincita 😍)', completed: true},
  {text: 'Amar y respetar mucho a la mujer mas hermosa que existe en el mundo (Ollincita 😍)', completed: true}
]


//Funcion que retorna el componente App
function App() {
  // Este es el valor que se va a mostrar en el input de la tarea
  const [newTask, setNewTask] = React.useState("");
  //Estas son las tareas que se van a mostrar en la lista
  const [tasks, setTasks] = React.useState(defaultTodos);
  //Este es el valor que buscaré dentro de la lista de tareas
  const [searchedTasks, setSearchedTasks] = React.useState("");
  
  //Contador de tareas completadas
  const completedTasks = tasks.filter(tasks => !!tasks.completed).length;
  const totalTasks = tasks.length;
  const searchedTasksResult = tasks.filter(task => task.text.toLowerCase().includes(searchedTasks.toLowerCase()));

  const congratsMessage = (totalTasks, completedTasks) => totalTasks === completedTasks ? "Felicidades, has completado todas tus tareas mi amor 🖤" : " ";

  const toggleTaskCompletition = (text) => {
    const newTask = tasks.map(task => {
      if(task.text === text){
        return task.completed? {...task, completed: true} : {...task, completed: false}
        // return {...task, completed: !task.comple};
      }
      console.log(task);
      return task;
    });
    setTasks(newTask);
  }

  const deleteTask = (text) =>{
    const newTasks = tasks.filter(task => task.text !== text);
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
          <TodoCounter 
          completed={ completedTasks } 
          total={totalTasks}
          message = {congratsMessage(totalTasks, completedTasks) }
          />
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
                OnComplete = { ()  => toggleTaskCompletition(task.text) }
                deleteTask = { () => deleteTask(task.text)}
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
