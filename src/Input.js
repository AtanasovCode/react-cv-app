import React from 'react';


function Input(props) {
    return (
        <label>
            <div className="input-desc">{props.labelName}</div>
            <input type={props.type} name={props.name} onChange={props.onChange} required />
        </label>
    );
}


export default Input;