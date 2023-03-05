import { createSignal } from "solid-js";
import Todo from "./components/Todo";

const App = () => {
    const [todo, setTodo] = createSignal('');
    const [todos, setTodos] = createSignal([
        { id: 1, name: 'Todo 1', status: false },
        { id: 2, name: 'Todo 2', status: false },
        { id: 3, name: 'Todo 3', status: true },
    ])

    const addTodo = (e) => {
        e.preventDefault();
        if(todo().length <= 1) { return }

        const newTodo = { id: todos().length + 1, name: todo(), status: false }
        setTodos([...todos(), {...newTodo }])
        setTodo("");
    }

    const updateTodo = (id) => {
        const updatedTodos = [...todos()].map(todo => todo.id === id ? {...todo, status: !todo.status } : todo);
        setTodos(updatedTodos);
    }

    const removeTodo = (id) => {
        const newTodos = [...todos()].filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const updateTodoTitle = (newTitle) => {
        console.log('parent new title', newTitle);
    }

    return(
        <div className="app">
            <form onSubmit={addTodo}>
                <input type="text" placeholder="new todo" value={todo()} onInput={(e) => setTodo(e.target.value)} />
            </form>
            <For each={todos()}>
                {
                    (todo, i) => <Todo update={() => updateTodo(todo.id)} edit={(e)=> updateTodoTitle(e)} remove={() => removeTodo(todo.id)} todo={todo} key={i} />
                }
            </For>
        </div>
    )
}
export default App;
