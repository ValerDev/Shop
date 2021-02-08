import React from 'react'
import Ticker from 'react-ticker'
import '../../assets/css/components/carusel/customTicker.scss';

const CustomTicker = (props) => {
    // let content = document.createElement('p')
    // content.innerHTML = props.data.content
    return (< Ticker move={props.move}>
        {({ index }) => (
            <div className='custom-ticker'>
                {props.data.content}
            </div>
        )}
    </Ticker >
    )
}

export default CustomTicker