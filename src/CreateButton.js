import './CreateButton.css';

function CreateButton({buttonName}){
    return (
    <button>
        <span>{buttonName}</span>
    </button>
    );
}

export { CreateButton };