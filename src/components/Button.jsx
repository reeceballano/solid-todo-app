const Button = ({ children, onClick}) => {
    return(
        <button onClick={() => onClick()} className="action-btn" type="button">
            {children}           
        </button>
    )
}

export default Button