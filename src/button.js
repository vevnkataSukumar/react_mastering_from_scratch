const CustomButton = (props) => {
    const {onPress, title, disabled, type} = props;
    return(
        <button onClick={onPress} disabled={disabled}>{title}</button>
    )
}

export default CustomButton;