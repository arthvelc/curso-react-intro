import './TodoSearch.css';

function TodoSearch({placeholder}){
    return(
        <div className={"form-control"}>
            <input className={"input input-alt"} placeholder={ placeholder } required={""} type={"text"}></input>
            <span className={"input-border input-border-alt"}></span>
        </div>
      
    );
 }

 export {TodoSearch};