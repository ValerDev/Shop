import React from 'react';
import '../../assets/css/components/inputs/customInput.scss'

export default function CustomInput(props) {
    return(
        <div className='custom-input'>
            <input type={props.data.type ? props.data.type : "text"} placeholder={props.data.placeholder}/>
        </div>
    )
}