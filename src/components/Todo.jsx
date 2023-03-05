import { createSignal } from "solid-js";

const Todo = ({ todo, update, remove, edit }) => {
    const [isEditing, setIsEditing] = createSignal(false);
    const [newTitle, setNewTitle] = createSignal(todo.name);
    const handleEditing = () => {
        setIsEditing((old) => !old);
        
    }

    return(
        <div className="todo-item">
            {todo.id} {todo.name} {JSON.stringify(todo.status)}
            { isEditing() ? <input type="text" value={newTitle()} onChange={(e) => edit(e.target.value)}/> : ''}
            <button onClick={() => handleEditing()}>edit</button>
            <button onClick={() => update()}>update</button>
            <button onClick={() => remove()}>remove</button>
        </div>
    )
}

export default Todo;