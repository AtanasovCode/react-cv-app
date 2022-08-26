import React from 'react';


function Input(props) {
    return (
        <label>
            <input 
                type={props.type} 
                name={props.name} 
                onChange={props.onChange} 
                placeholder={props.labelName}
                required />
        </label>
    );
}


export default Input;