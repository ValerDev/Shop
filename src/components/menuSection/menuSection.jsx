import '../../assets/css/components/menuSection/menuSection.scss';
import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class MenuSection extends Component {
    
    render() {
        const settings = {
            rows: this.props.data.rows ? this.props.data.rows : 1,
            slidesToShow: this.props.data.shown ? this.props.data.shown : 7,
            autoplaySpeed: 3000,
            // centerMode: true,
            autoplay: false,
            arrowsScroll: this.props.data.scrollCount ? this.props.data.scrollCount : 1,
            autoplayScroll: this.props.data.scrollCount ? this.props.data.scrollCount : 1,
            wheelScroll: this.props.data.scrollCount ? this.props.data.scrollCount : 1,
        };
        let id = this.props.data.title.split(' ').join('').toLowerCase()
        const selectMenu = (event) => {
            if (document.querySelector(`#${id} .sub-menu.sub-menu-active`)) document.querySelector(`#${id} .sub-menu.sub-menu-active`).classList.remove('sub-menu-active')
            event.target.classList.add('sub-menu-active')
        }
        return (
            <div className='MenuSection' id={id}>
                <div className='top-block'>
                    <h3>{this.props.data.title}</h3>
                    <span>{this.props.data.subtitle}</span>
                    <hr />
                    <div className='tools'>
                        {this.props.data.submenus ? <div className='sub-menus'>
                            {this.props.data.submenus.map((submenu, i) => { return <h4 key={i} className='sub-menu' onClick={selectMenu}>{submenu.title}</h4> })}
                        </div> : ''}
                        {this.props.data.products.length > settings.slidesToShow ? <div className='control'>
                            <div className='arrow left' onClick={() => document.querySelector(`#${id} .carousel-prev`) ? document.querySelector(`#${id} .carousel-prev`).click() : ''}><i className="fas fa-chevron-left"></i></div>
                            <div className='arrow right' onClick={() => document.querySelector(`#${id} .carousel-next`) ? document.querySelector(`#${id} .carousel-next`).click() : ''}><i className="fas fa-chevron-right"></i></div>
                        </div>
                            : ''}
                    </div>
                </div>
                {this.props.data.products.length > settings.slidesToShow ? <Slider {...settings}>
                    {this.props.data.products.map((product, i) => {
                        return <div className={`carusel-product product_${++i}`} key={i}>{product}</div>
                    })}
                </Slider> : <div className='section-content'>  {this.props.data.products.map((product, i) => {
                    return <div className={`carusel-product product_${++i}`} key={i}>{product}</div>
                })}</div>}
            </div>
        );
    }
}