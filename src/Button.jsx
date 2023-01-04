const Button = ({children, type="button", clickListener}) => {
    return (
        <button type = {type} onClick = {clickListener}>
            {children}
        </button>
    );
}

export default Button;