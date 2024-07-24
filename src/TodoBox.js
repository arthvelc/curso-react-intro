import './TodoBox.css';

function TodoBox({ children }) {
    return (
        <div className="todo-box">
            { children }
        </div>
    );
}

export { TodoBox };