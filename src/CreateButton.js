import './CreateButton.css';

function CreateButton({buttonName}){
    return (
    <button className="create-btn"  onClick={(event)=> {
        console.log('Create Button Clicked');
        console.log(event.target);
    }}>
        <span className='create-btn-span'>{buttonName}</span>
    </button>
    );
}




export { CreateButton };