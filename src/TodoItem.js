import './TodoItem.css';

function TodoItem({ text , children, checked, completed, setCompleted }) {
    return(
      <li className='todo-item'>
        <p className="todo-item--complete">{text}</p>

        <label className={"container"}>

          <input className = "container-checked"
          checked={ completed } 

          type={"checkbox"} 
          />

          <div>{ children}</div>
            
        </label>
      </li>
    );
}

export {TodoItem};
