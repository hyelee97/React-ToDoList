import React from 'react';
import '../css/Form.css';
 
const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input
                value={value}
                placeholder="Input new to do"
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>Add</div>
        </div>
    );
};
 
export default Form;