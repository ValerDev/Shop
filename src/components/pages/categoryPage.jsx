import React, { useState, useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Context from '../../context';
import '../../assets/css/components/pages/categoryPage.scss'
import ProductItem from '../blocks/productItem';
import RangeSlider from '../menuItems/dubleRange';

export default function CategoryPage(props) {
    const coState = useContext(Context);
    const ID = useParams()
    let ProductLoc = ID.id.split('-').join('_')
    let price = 0
    const location = useLocation();
    const calculateMaxPrice = () => {
        if(coState.state.home.categories[ProductLoc]){
            coState.state.home.categories[ProductLoc].products.forEach((e) => {
                if (!e.discounted) {
                    if (price < e.price) price = e.price
                } else {
                    if (price < e.price - e.price * e.discounted / 100) price = e.price - e.price * e.discounted / 100
                }
            })
        }
        return price
    }
    const calculateMinPrice = () => {
        if(coState.state.home.categories[ProductLoc]){
            coState.state.home.categories[ProductLoc].products.forEach((e) => {
                if (!e.discounted) {
                    if (price > e.price) price = e.price
            } else {
                if (price > e.price - e.price * e.discounted / 100) price = e.price - e.price * e.discounted / 100
            }
        })
    }
    return price
}
let [filteredPrice, setFilteredPrice] =  useState([calculateMinPrice(),calculateMaxPrice()])
const changePrice = (newValue) => {
    setFilteredPrice(newValue)
}

useEffect(() => {
    setFilteredPrice([calculateMinPrice(),calculateMaxPrice()])
}, [location.pathname]);

    return (
        <section id={ID.id}>
            <div className='layout'>
                <div className='category-page' >
                    <div className="filters-block">
                        <div className="choose-price">
                            <RangeSlider onchangePrice = {changePrice} maxPrice={calculateMaxPrice()} minPrice={calculateMinPrice()} title='Price' />
                        </div>

                        <div className="choose-size">
                            <h3>Size</h3>
                            <div className='sizies'>
                                <div className='size'>55</div>
                                <div className='size'>S</div>
                                <div className='size'>M</div>
                                <div className='size'>L</div>
                            </div>
                        </div>
                    </div>
                    <div className="products-block">
                        {
                            coState.state.home.categories[ProductLoc] ? coState.state.home.categories[ProductLoc].products.map(product =>!product.discounted && product.price <= filteredPrice[1] && product.price >= filteredPrice[0] ? 
                            <ProductItem data={product} key={product.id}/> : 
                            product.price - product.price * product.discounted / 100  <= filteredPrice[1] && product.price - product.price * product.discounted / 100  >= filteredPrice[0] ? <ProductItem data={product} key={product.id}/>  : '') : 
                            <div className='danger'><i className="fas fa-exclamation-triangle"></i>We couldn't find products matching the selection.</div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}