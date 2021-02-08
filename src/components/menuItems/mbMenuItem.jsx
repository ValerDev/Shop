import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/components/menuItems/mbMenuItem.scss';
import * as Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

export default function MbMenuItem(props) {
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const scrollTop = () => {
        scroll.scrollTo(0);
    }

    return (
        <div className='mb-menu-item' onClick={() => scrollTop()}>
            <div className='content'>
                <Link to={props.data.link ? props.data.link : ''} className='title'>{props.data.title}</Link>
                {props.data.subMenus ? <div className='icon' onClick={() => setSubMenuOpen(!subMenuOpen)}>
                    <i className={subMenuOpen || props.data.open ? "fas fa-chevron-right sub-open" : "fas fa-chevron-right"}></i>
                </div> : ''}
            </div>
            {
                props.data.subMenus ? <div className={subMenuOpen || props.data.open ? 'sub-menu subMenu-open' : 'sub-menu '}>
                    {props.data.subMenus}
                </div> : ''
            }
        </div>
    )
}