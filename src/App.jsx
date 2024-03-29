import { createEffect, createSignal } from "solid-js";
import Todo from "./components/Todo";
import Input from "./components/Input";
import MouseCursor from "./components/MouseCursor";
import FilterBy from "./components/FilterBy";

const App = () => {
    const [todo, setTodo] = createSignal('');
    const [todos, setTodos] = createSignal([
        { id: 1, name: 'Kain', status: false },
        { id: 2, name: 'Tulog', status: false },
        { id: 3, name: 'Gala', status: true },
    ])
    const [position, setPosition] = createSignal({x: 0, y: 0});
    const [filter, setFilter] = createSignal('All');

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

    const filteredTodos = () => {
        if(filter() == 'All') {
            return todos();
        }

        if(filter() == 'Completed') {
            return todos().filter(item => item.status == true);
        }

        if(filter() == 'NotComplete') {
            return todos().filter(item => item.status == false);
        }
    }

    createEffect(() => {
        console.log('todos', todos());
    })

    const handleMouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    const style = {
        left: position().x + 'px;',
        top: position().y + 'px;'
    }

    const filterBy = (e) => {
        const { value } = e.target;
        setFilter(value);
    }

    return(
        <div onMouseMove={handleMouseMove} className="app">
            <div className="app-container">

                <form className="add-form" onSubmit={addTodo}>
                    {/* <Input placeHolder="New todo.." value={todo()} setValue={setTodo()}/> */}
                    <input type="text" placeholder="New todo" value={todo()} onInput={(e) => setTodo(e.target.value)} />
                </form>

                <FilterBy todos={todos()} onClick={filterBy}/>
                
                <For each={filteredTodos()}>
                    {
                        (todo, i) => <Todo update={() => updateTodo(todo.id)} edit={(e)=> updateTodoTitle(e)} remove={() => removeTodo(todo.id)} todo={todo} key={i} />
                    }
                </For>
            </div>
        </div>
    )
}
export default App;
