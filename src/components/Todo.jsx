import { createSignal } from "solid-js";
import EditButton from "./EditButton";

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
                    <input className="todo-checkbox" type="checkbox" checked={todo.status}/>
                    <span className={`todo-title ${todo.status ? 'todo-done' : ''}`}>
                        {todo.name} 
                        <EditButton edit={() => handleEditing() } />
                    </span>
                </div>

                <div className="todo-action">
                    
                    <button onClick={() => update()}>update</button>
                    <button onClick={() => remove()}>remove</button>
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