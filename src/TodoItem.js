import './TodoItem.css';

function TodoItem({ text , checked, children}){
    return(
      <li className='todo-item'>
        <p>{text}</p>
        <label className={"container"}>
          <input checked={ checked } type={"checkbox"} />
          <div className={"input"}>{ children }</div>
          <div className={"checkmark"}></div>
        </label>
      </li>
    );
}

export {TodoItem};
