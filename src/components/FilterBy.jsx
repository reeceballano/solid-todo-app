import { createSignal, createEffect } from "solid-js";

const FilterBy = (props) => {
    const all = () => props.todos.length;
    const done = () => props.todos.filter(todo => todo.status == true).length;
    const active = () => props.todos.filter(todo => todo.status == false).length;

    createEffect(() => {
        console.log(props.todos.length)
    })

    return(
        <div className="filter-by">
            <form>
                <div class="radio-buttons">
                    <div className="form-group">
                        <input onClick={props.onClick} name="filterby" id="all" type="radio" value="All" checked />
                        <label for="all" >All ({all})</label>
                    </div>
                    <div className="form-group">
                        <input onClick={props.onClick}  name="filterby" id="completed" type="radio" value="Completed" />
                        <label for="completed">Done ({done})</label>
                    </div>
                    <div className="form-group">
                        <input onClick={props.onClick}  name="filterby" id="notcomplete" type="radio" value="NotComplete" />
                        <label for="notcomplete">Active ({active})</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FilterBy;