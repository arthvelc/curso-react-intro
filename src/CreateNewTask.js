import { Children } from "react";
import "./CreateNewTask.css";


function CreateNewTask({ children, placeholder}) {
    return (
        <div className="create-new-task">
            <h2 className="task-title">Crea una nueva tarea:</h2>
            <form>
                <label className="task-label"> Nombre de la tarea: </label>
                <br/>
                <div className={"form-control"}>
                  <input className={"input input-alt"} placeholder={ placeholder } required={""} type={"text"}></input>
                  <span className={"input-border input-border-alt"}></span>
                </div>

            </form>

            <div className="task-children"> { children }</div>

            <img src={"./img/hand-drawn-flat-design-kanban-illustration_23-2149344878-removebg-preview.png"}/>
        </div>
    )
}

export { CreateNewTask };