import { createSignal } from "solid-js";

const Todo = ({ todo, update, remove }) => {
    const [isEditing, setIsEditing] = createSignal(false);

    const edit = () => {
        setIsEditing((old) => !old);
    }

    return(
        <div className="todo-item">
            {todo.id} {todo.name} {JSON.stringify(todo.status)}
            { isEditing() ? <input type="text" /> : ''}
            <button onClick={() => edit()}>edit</button>
            <button onClick={() => update()}>update</button>
            <button onClick={() => remove()}>remove</button>
        </div>
    )
}

export default Todo;