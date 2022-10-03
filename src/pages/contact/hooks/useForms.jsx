import { useState } from 'react';
 
const useForms = (props) => {
const [value, setValue] = useState("");
 
    return [
        value,
        () => (
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <input id={props.id} value={value} onClick={(e)=> setValue(e.target.value)} type={props.type} />
            </div>
        )
    ];
}
 
export default useForms;