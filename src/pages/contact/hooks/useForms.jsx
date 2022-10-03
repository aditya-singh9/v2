import { useState } from 'react';
 
const useForms = (props) => {
const [value, setValue] = useState(useForms);
 
    return [
        value,
        () => (
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <input id={props.id} type={props.type} />
            </div>
        )
    ];
}
 
export default useForms;