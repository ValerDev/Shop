import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/components/inputs/customButton.scss'

export default function CustomButton(props) {
    
    return (
        <div className='custom-button'>
            <button type={props.data.type} onClick={() => props.data.click()}>{props.data.title}
                {props.data.link ? <Link onClick={props.scrollTop} to={props.data.link} /> : ''}
            </button>
        </div>
    )
}