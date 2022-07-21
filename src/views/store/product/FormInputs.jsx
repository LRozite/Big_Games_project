




export const NumberInput = (props) => {  
    const minValue = 1;
    
    return(
        <div className="prodForm_input_num">
            <span 
                className="prodForm_input_numMinus"
                onClick={ e => {
                    console.log("minus");
                    if( props.field.value > minValue ) {
                        props.form.setFieldValue( props.field.name, props.field.value-1 );
                    }
                }}
            >-</span>
            <input 
                type = "number" 
                name = { props.field.name } 
                className = 'prodForm_input number'
                value={props.field.value}
                min={minValue}
                onChange={e=>props.form.handleChange(e)}
                {...props}
                disabled
            /> 
            <span 
                className="prodForm_input_numPlus"
                onClick={ e => {
                    props.form.setFieldValue( props.field.name, props.field.value+1 );
                }}
            >+</span>

        </div>
    )    
}