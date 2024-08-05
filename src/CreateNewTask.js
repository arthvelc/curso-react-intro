import { Children } from "react";
import "./CreateNewTask.css";


function CreateNewTask({ children, placeholder, img }) {
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

            <img src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-6114062-5059486.png?f=webp"/>
        </div>
    )
}

export { CreateNewTask };