import { createSignal } from "solid-js";
import Todo from "./components/Todo";

const App = () => {
    const [todo, setTodo] = createSignal('');
    const [todos, setTodos] = createSignal([
        { id: 1, name: 'Kain', status: false },
        { id: 2, name: 'Tulog', status: false },
        { id: 3, name: 'Gala', status: true },
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

    const updateTodoTitle = (todo) => {
        console.log('parent new title', todo);
        const updatedTodos = [...todos()].map(item => item.id == todo.id ? {...item, name: todo.name} : item);
        // console.log(updatedTodos)
        if(!updatedTodos) { return }
        return setTodos(updatedTodos);    
    }

    return(
        <div className="app">
            <div className="app-container">
                <form className="add-form" onSubmit={addTodo}>
                    <input type="text" placeholder="New todo" value={todo()} onInput={(e) => setTodo(e.target.value)} />
                </form>

                <For each={todos()}>
                    {
                        (todo, i) => <Todo update={() => updateTodo(todo.id)} edit={(e)=> updateTodoTitle(e)} remove={() => removeTodo(todo.id)} todo={todo} key={i} />
                    }
                </For>
            </div>
        </div>
    )
}
export default App;
