const Todo = ({ todo, update, remove }) => {
    return(
        <div className="todo-item">
            {todo.id} {todo.name} {JSON.stringify(todo.status)}
            <button onClick={() => update()}>update</button>
            <button onClick={() => remove()}>remove</button>
        </div>
    )
}

export default Todo;