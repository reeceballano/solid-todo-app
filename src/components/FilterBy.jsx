const FilterBy = ({onClick}) => {
    return(
        <div className="filter-by">
            <form>
                <div class="radio-buttons">
                    <div className="form-group">
                        <input onClick={onClick} name="filterby" id="all" type="radio" value="All" checked />
                        <label for="all" >All</label>
                    </div>
                    <div className="form-group">
                        <input onClick={onClick}  name="filterby" id="completed" type="radio" value="Completed" />
                        <label for="completed">Completed</label>
                    </div>
                    <div className="form-group">
                        <input onClick={onClick}  name="filterby" id="notcomplete" type="radio" value="NotComplete" />
                        <label for="notcomplete">Not Complete</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FilterBy;