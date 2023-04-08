const FilterBy = ({onClick}) => {
    return(
        <div className="filter-by">
            <form>
                <div className="form-group">
                    <input onClick={onClick} name="filterby" id="all" type="radio" value="All" />
                    <label>All</label>
                </div>
                <div className="form-group">
                    <input onClick={onClick}  name="filterby" id="completed" type="radio" value="Completed" />
                    <label>Completed</label>
                </div>
                <div className="form-group">
                    <input onClick={onClick}  name="filterby" id="notcomplete" type="radio" value="NotComplete" />
                    <label>Not Complete</label>
                </div>
            </form>
        </div>
    )
}

export default FilterBy;