import React from 'react';
import '../../assets/css/components/menuItems/mbMenu.scss';
import MbMenuItem from '../menuItems/mbMenuItem';

export default function MbMenu(props) {
    return (
        <div className={props.openMenu[0] ? 'mb-menu open' : 'mb-menu'}>
            <div className="menu-content">
                <div className='head'>
                    <span>Shop By Department</span>
                    <i className="fas fa-times" onClick={() => props.openMenu[1](false)}></i>
                </div>
                <div className="menus">
                    {props.data.menu}
                    <MbMenuItem data={{
                        subMenus: props.data.subMenus ? props.data.subMenus : false,
                        title: props.title ? props.title : 'Menu',
                        link: props.data.link ? props.data.link : '#',
                        open: props.open ? props.open : false, 
                    }} />
                </div>
            </div>
            <div className="fone" onClick={() => props.openMenu[1](false)}></div>
        </div>
    )
}