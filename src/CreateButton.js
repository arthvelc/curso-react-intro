import './CreateButton.css';

function CreateButton({buttonName}){
    return (
    <button className="create-btn">
        <span className='create-btn-span'>{buttonName}</span>
    </button>
    );
}

export { CreateButton };