import { createSignal } from "solid-js";

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
            <span className="todo-title">{todo.name}</span>

            <div className="todo-action">
                { isEditing() ? <input type="text" value={newTitle()} onChange={(e) => handleEdit(e.target.value)}/> : ''}
                <button onClick={() => handleEditing()}>edit</button>
                <button onClick={() => update()}>update</button>
                <button onClick={() => remove()}>remove</button>
            </div>
        </div>
    )
}

export default Todo;