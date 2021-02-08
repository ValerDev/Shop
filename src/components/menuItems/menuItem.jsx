import React from 'react'
import '../../assets/css/components/menuItems/menuItem.scss';
import {
    Link
} from "react-router-dom";
import * as Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

export default function MenuItem(props) {
    const scrollTop = () => {
        scroll.scrollTo(0);
    }
    return (
        <div className='custom-menu-item' onClick={() => scrollTop()} style={{ width: props.width ? props.width : 120 + 'px' }}>
            <Link to={props.link ? props.link.toLowerCase() : ''}>
                <div className='menu-content'>
                    <div className='menu-titile' style={{ fontSize: props.general ? '18px' : '15px', fontWeight: props.general ? 800 : 500 }}>{props.title ? props.title : 'Title'}</div>
                    {props.sub ? <i className="fas fa-chevron-right" style={{ transform: props.right ? `rotate(${0}deg)` : `rotate(${90}deg)` }}></i> : ''}
                </div>
            </Link>
            {props.sub ? <div className={props.right ? 'submenu-right' : 'submenu'}
                style={{ flexDirection: props.dir ? props.dir : '', flexWrap: props.wrap ? props.wrap : '' }}>
                {props.data ? [props.data].map(e => e) : ''}
            </div> : ''}
        </div>
    )
}