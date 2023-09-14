import React, { useState } from 'react'

function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput