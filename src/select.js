const Picker = ({data, onChangeOption, id, value}) => {
    return (
        <select
            id={id}
            value={value}
            // {...props}
            onChange={e => onChangeOption(e)}
            onBlur={e => onChangeOption(e)}
        > 
            <option />
            {
                data.map(val => <option key={val} value={val}>{val}</option>)
            }
        </select>
    )
}

export default Picker;