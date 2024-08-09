import './TodoCounter.css'

function TodoCounter({total, completed, message }){
    return (
      <>
      <h2>Has completado {completed} de {total} Tareas.</h2>
      <h2>{ message }</h2>
      </>
    );
}

export {TodoCounter};
