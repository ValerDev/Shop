import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/components/pages/productPage.scss'
import Context from '../../context';
import RatingBlock from '../blocks/ratingBlock';
import ImagesGallery from "../carusel/imagesGallery";
import CustomButton from '../inputs/customButton';


export default function ProductPage(props) {
    let [prodCounter, setProdCounter] = useState(0);
    const coState = useContext(Context);
    const allProducts = [...coState.state.home.categories.new_arrivals.products, ...coState.state.home.categories.on_sale.products, ...coState.state.home.categories.top_best_selling.products]
    let currentProduct = 0;
    const ID = useParams()
        
    allProducts.filter(product => {
        if(product.id === Number(ID.id))  currentProduct = product
        return true
    })
    return (
        <section id={`product-ID${ID.id}`}>
            <div className='layout'>
                <div className='product-page'>
                    <div className="images-gallery">
                        <ImagesGallery images={currentProduct.images}/>
                    </div>
                    <div className='product-info'>
                        <h2 className='name'>{currentProduct.name}</h2>
                        <RatingBlock rating={currentProduct.rating} />
                        <h3 className='price'>{`$${currentProduct.discounted ? currentProduct.price - currentProduct.price * currentProduct.discounted / 100 : currentProduct.price}.00`}</h3>
                        {currentProduct.discounted ? <span className='discounted'>{`$${currentProduct.price}`}</span> : ''}
                        <p className='availability'>Availability:<span href=""> {currentProduct.isInStock}</span></p>
                        <p className='sku'>SKU: <span href=""> {currentProduct.sku}</span></p>
                        <p className='description'>{currentProduct.description}</p>
                        <ul>
                            {currentProduct.features.map((feature,i) =>  <li key={i} className='feature'>{feature.text}</li> )}
                        </ul>
                        <form action="">
                            <div className='product-counter'>
                                <i className="fa fa-minus" onClick={() => { prodCounter > 0 ? setProdCounter(--prodCounter) : setProdCounter(0) }}></i>
                                <input type="number" value={prodCounter > 0 ? prodCounter : 0} onChange={e => e.target.value} />
                                <i className="fa fa-plus" onClick={() => { setProdCounter(++prodCounter) }}></i>
                            </div>
                            <CustomButton data={{ type: 'submit', title: 'Add to Cart' }} />
                        </form>
                        <div className="product-social-extra">
                            <a href="/" title="Add To Wishlist" className="action towishlist wishlist-link trigger-auth-popup" data-action="ajax-popup-login"><i className="fa fa-heart"></i></a>
                            <a href="/" title="Add To Compare" data-post="{&quot;action&quot;:&quot;http:\/\/blueskytechmage.com\/ayo\/en_6\/catalog\/product_compare\/add\/&quot;,&quot;data&quot;:{&quot;product&quot;:&quot;88&quot;,&quot;uenc&quot;:&quot;aHR0cDovL2JsdWVza3l0ZWNobWFnZS5jb20vYXlvL2VuXzYvc2Ftc3VuZy1jNDlqODktODc1LWRlYmVuaGFtcy1wbHVzLTEuaHRtbA,,&quot;}}" data-role="add-to-links" className="action tocompare compare-link"><i className="fa fa-retweet"></i></a>
                            <a href="/" onClick={function () { window.print(); return false; }} title="Print" className="action print-link"><i className="fa fa-print"></i></a>
                            <a href="https://www.facebook.com/sharer.php?u=http://blueskytechmage.com/ayo/en_6/samsung-c49j89-875-debenhams-plus-1.html" title="Share" onClick={function () { return !window.open(this.href, 'Facebook', 'width=500,height=500') }}><i className="fa fa-share"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}