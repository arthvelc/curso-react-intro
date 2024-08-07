import React from "react";
import { Children } from "react";
import "./CreateNewTask.css";


function CreateNewTask({ children, placeholder, newTask, setNewTask }) {
    

    return (
        <div className="create-new-task">
            <h2 className="task-title">Crea una nueva tarea:</h2>
            <form>
                <label className="task-label"> Nombre de la tarea: </label>
                <br/>
                <div className={"form-control"}>
                    <input className={"input input-alt"} placeholder={ placeholder } required={""} type={"text"}
                    value = { newTask }
                    onChange={event =>{
                        // Cambio el valor de la nueva tarea por el valor que se ingresa en el input.
                        setNewTask(event.target.value);
                    }}></input>
                    <span className={"input-border input-border-alt"}></span>
                </div>

            </form>

            <div className="task-children"> { children }</div>

            <img src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-6114062-5059486.png?f=webp"/>
        </div>
    )
}

export { CreateNewTask };