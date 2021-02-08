import React, { useState, useEffect, useContext } from 'react'
import '../assets/css/header.scss';
import { Link,useLocation } from "react-router-dom";
import CustomSelect from './inputs/customSelect'
import CustomInput from './inputs/customInput';
import Context from "../context";
import CustomButton from './inputs/customButton';
import MenuItem from './menuItems/menuItem';
import MbMenu from './menuItems/mbMenu';
import MbMenuItem from './menuItems/mbMenuItem';
import ProductItem from './blocks/productItem';

export default function Header(props) {
    const [isMainMenuOpen, openMainMenu] = useState(true)
    const location = useLocation();
    const coState = useContext(Context);
    useEffect(() => {
        openMainMenu(location.pathname === '/' ? true : false)
    }, [location.pathname]);
    const [selectedProductsCounter, setSelectedProductsCounter] =  useState(coState.state.selected_products.length)
    const [shopCardOpen, setshopCardOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const [MbMenusData] = useState([...props.data.header_menus, ...props.data.main_menu.sub_menus])
    const [headerMenusData] = useState(props.data.header_menus)
    const [mainMenusData] = useState(props.data.main_menu.sub_menus)
    const [selectedProducts, setselectedProducts] = useState(coState.state.selected_products);
    window.addEventListener('scroll', () => {
        document.querySelector("html").scrollTop > 100 ? setScrolled(true) : setScrolled(false);
    });

    const createMenus = (initData, choosenItem) => {
        initData.forEach((item) => {
            return item.sub_menus ? createMenus(item.sub_menus) : ''
        });

        return (
            initData.map((item, i) => {
                return (
                    choosenItem === 'mobileMenuItem' ? <MbMenuItem key={i} data={{ title: item.title, link: item.link, subMenus: item.sub_menus ? createMenus(item.sub_menus, 'mobileMenuItem') : false }} /> :
                        choosenItem === 'mainMenuItem' ? <MenuItem key={i} general={item.general ? item.general : false} title={item.title} link={item.link} sub={item.sub_menus ? true : false} data={item.sub_menus ? [createMenus(item.sub_menus, 'mainMenuItem')] : ''} right={true} width={'100%'} dir={item.dir} wrap={item.wrap} /> :
                            choosenItem === 'headerMenuItem' ? <MenuItem key={i} general={item.general} width={item.sub_menus ? '' : 'max-content'} title={item.title} link={item.link} sub={item.sub_menus ? true : false} data={item.sub_menus ? [createMenus(item.sub_menus, 'headerMenuItem')] : ''} right={item.general ? false : true} /> :
                                false
                )
            })
        )
    }
    return (
        <header>
            <div className='top-header'>
                <div className='layout'>
                    <div className="top-header-content">
                        <div className='location-info'>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{props.location.stote}</span>
                        </div>
                        <div className='personal-info'>
                            <Link to='my-account'>{props.data.top_header.pers_info.acc}</Link>
                            <Link to='my-wish-list'>{props.data.top_header.pers_info.wish}({props.counters.wish_counter})</Link>
                            <span>{props.data.top_header.pers_info.sign}</span>
                            <Link to='compare'>{props.data.top_header.pers_info.comp}({props.counters.comp_counter})</Link>
                        </div>
                    </div>
                </div>
                <div className='header-main'>
                    <div className='layout'>
                        <div className='header-main-content'>
                            {props.maxWidth < 767 ? <i className="fas fa-bars" onClick={() => props.openMenu[1](true)}></i> : ''}
                            <div className='logo-block' onClick={() => props.scrollTop()}>
                                <Link to='/'>
                                    <div className='logo'></div>
                                </Link>
                            </div>
                            {props.maxWidth > 767 ? <div className='contact-info'>
                                <div className='contact-icon'></div>
                                <div className='info-block'>
                                    <span className='title'>{props.contact.title}</span>
                                    <span className='phone'>{props.contact.phone}</span>
                                </div>
                            </div> : ''}
                            {props.maxWidth > 767 ? <div className='search'>
                                <div className='search-block'>
                                    <CustomSelect data={props.data.header_main.custom_select} />
                                    <CustomInput data={props.data.header_main.custom_input} />
                                </div>
                                <CustomButton data={props.data.header_main.custom_button} />
                            </div> : ''}
                            <div className='mini-cart' onClick={(event) => {
                                    event.stopPropagation()
                                return setshopCardOpen(!shopCardOpen)}}>
                                <Link to='/checkout/cart'>
                                    <div className='shop-counter'>{selectedProductsCounter}</div>
                                </Link>
                                    <i className="fas fa-shopping-bag"></i>
                                    {shopCardOpen ? <div className='selected-products'>
                                        {selectedProducts.length > 0 ? '' :'You have no items in your shopping cart.'}
                                        {selectedProducts.map((product,i) => <ProductItem data={product} key={i}/>)}
                                    </div> : ''}
                            </div>
                        </div>
                        {props.maxWidth < 767 ?
                            <div className='search'>
                                <div className='search-block'>
                                    <CustomSelect data={props.data.header_main.custom_select} />
                                    <CustomInput data={props.data.header_main.custom_input} />
                                </div>
                                <CustomButton data={props.data.header_main.custom_button} />
                            </div> : ''}
                    </div>
                </div>
                {props.maxWidth > 767 ? <div className='header-menus'>
                    <div className='layout'>
                        <div className='general-menu' onClick={() => openMainMenu(!isMainMenuOpen)}>
                            <div className='title-block' onClick={() => props.scrollTop()} >
                                <i className="fas fa-bars"></i>
                                <span className='title'>{props.data.main_menu.title}</span>
                            </div>
                            <div className={isMainMenuOpen ? 'main-menu main-menu-open' : 'main-menu'}>
                                {createMenus(mainMenusData, 'mainMenuItem')}
                            </div>
                        </div>
                        {createMenus(headerMenusData, 'headerMenuItem')}
                    </div>
                </div> : <MbMenu openMenu={props.openMenu} open={true} title='Menus' data={{ subMenus: createMenus(MbMenusData, 'mobileMenuItem'), }} />
                }
            </div>
            { props.maxWidth > 767 ? <div className={scrolled ? 'scrolled-header scrolled' : 'scrolled-header'}>
                <div className="layout">
                    <div className='logo-block' onClick={() => props.scrollTop()}>
                        <Link to='/'>
                            <div className='logo'></div>
                        </Link>
                    </div>
                    <div>
                        {createMenus(headerMenusData, 'headerMenuItem')}
                    </div>
                    <div className='mini-cart'>
                        <Link to='/checkout/cart'>
                            <div className='shop-counter'>{props.counters.shop_counter}</div>
                            <i className="fas fa-shopping-bag"></i>
                        </Link>
                    </div>
                </div>
            </div> : ''}
        </header>
    )
}