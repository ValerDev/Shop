import React, { useState } from 'react';
import '../../assets/css/components/inputs/customSelect.scss'

export default function CustomSelect(props) {
    const [selected, setSelected] = useState(props.data.selected);
    const [isOpenSelect, setOpen] = useState(false)

    return (
        <div className='custom-select'>
            <div className={isOpenSelect ? 'fullscreen-layout' : 'fullscreen-layout disable'} 
            onClick={() => { isOpenSelect ? setOpen(false) : setOpen(true) }}></div>
            <div className='select-content'>
                <label onClick={() => { isOpenSelect ? setOpen(false) : setOpen(true) }}>
                    <div className='selected-block'>
                        <span className='title'>{selected}</span>
                        <span className={isOpenSelect ? 'pntik rotate' : 'pntik'}>
                            <i className="fas fa-chevron-right"></i>                        
                        </span>
                    </div>
                <div className={isOpenSelect ? 'openSelect select-options-block' : 'select-options-block'}>
                        {props.data.options.map((e, i) => <div className='option' onClick={() => setSelected(e.value)} key={i}> {e.value} </div>)}
                    </div>
                </label>
            </div>
        </div >
    )
}