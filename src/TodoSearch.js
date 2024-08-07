import './TodoSearch.css';

function TodoSearch({placeholder, searchedTasks, setSearchedTasks}){
    return(
        <div className={"form-control"}>
            <input className={"input input-alt"} placeholder={ placeholder } required={""} type={"text"}
            value={ searchedTasks }
            onChange = {event => setSearchedTasks(event.target.value)}
            >

            </input>
            <span className={"input-border input-border-alt"}></span>
        </div>
    );
 }

 export {TodoSearch};