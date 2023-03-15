import { createSignal } from "solid-js";
import Button from "./Button";

const Todo = ({ todo, update, remove, edit }) => {
    const [isEditing, setIsEditing] = createSignal(false);
    const [newTitle, setNewTitle] = createSignal(todo.name);
    const handleEditing = () => {
        setIsEditing((old) => !old);
        
    }

    const handleEdit = (e) => {
        if(e.length < 3) { return }
        setNewTitle(e);
        const updatedTodo = {...todo, name: newTitle()}
        edit(updatedTodo);
    }

    return(
        <div className="todo-item">
            <div className="todo-meta">
                <div className="todo-title-container">
                    <input className="todo-checkbox" type="checkbox" checked={todo.status} onChange={() => update()}/>
                    <span className={`todo-title ${todo.status ? 'todo-done' : ''}`}>
                        {todo.name} 
                        <Button onClick={() => handleEditing()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn-icons btn-edit">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </Button>
                    </span>
                </div>

                <div className="todo-action">
                    <Button onClick={() => remove()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="btn-icons btn-remove">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>  
                    </Button>
                </div>
            </div>
            { 
                isEditing() ? 
                    <div className="edit-text">
                        <input type="text" value={newTitle()} onChange={(e) => handleEdit(e.target.value)}/> 
                    </div>
                : ''
            }
        </div>
    )
}

export default Todo;