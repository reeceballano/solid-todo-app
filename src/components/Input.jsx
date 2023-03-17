const Input = ( props, setValue) => {
    const { placeHolder, value } = props;
    const handleInput = (e) => {
        setValue(e);
        console.log(e)
    }
    return(
        <input type="text" placeholder={placeHolder} value={value} onInput={(e) => handleInput(e.target.value) }/>
    )
}

export default Input;

