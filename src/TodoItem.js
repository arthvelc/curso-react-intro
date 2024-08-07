import './TodoItem.css';

function TodoItem({ text , checked, children}){
    return(
      <li className='todo-item'>
        <p className="todo-item--complete">{text}</p>

        <label className={"container"}>

          <input className = "container-checked"checked={ checked } type={"checkbox"} />

          <div>{ children}</div>
            
        </label>
      </li>
    );
}

export {TodoItem};
