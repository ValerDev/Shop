import React, {useState, useContext} from 'react';
import '../../assets/css/components/blocks/productItem.scss';
import CustomButton from '../inputs/customButton';
import RatingBlock from './ratingBlock';
import Context from '../../context';
import * as Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../redux/state';
export default function ProductItem(props) {
    const scroll = Scroll.animateScroll;
    const scrollTop = () => {
        scroll.scrollTo(0);
    }

    const coState = useContext(Context);


    return (
        <div className='product-item'  style={{ display: 'flex', flexDirection: props.data.horizontal ? 'row' : 'column', height: props.data.horizontal ? '150px' : 'auto', width: props.data.horizontal ? '350px' : '180px' }}>
            <div className='image-block' style={{height: props.data.horizontal ? '130px' : '180px', maxWidth: props.data.horizontal ? '130px' : '180px', margin: props.data.horizontal ? '0 1em' : '' }} >
                <Link  onClick={scrollTop} to={props.data.link ? props.data.link+ '/' + props.data.id : '#'} >
                    <div className='image' style={{ backgroundImage: `url(${props.data.images[0].original})`, height: props.data.horizontal ? '130px' : '180px', maxWidth: props.data.horizontal ? '130px' : '180px', }}></div>
                </Link>
                {!props.data.horizontal ?
                    <div className='product-state'>
                        {props.data.discounted ? <div className='discounted'>{typeof (props.data.discounted) === 'number' ? `-${props.data.discounted}%` : "Sale"} </div> : ''}
                        {props.data.new ? <div className='new'>New</div> : ''}
                    </div> : ''}
                {
                    !props.data.horizontal ?
                        <div>
                            <div className="tools">
                                <div className="tool like">
                                    <i className="far fa-heart"></i>
                                </div>
                                <div className="tool view">
                                    <i className="far fa-eye"></i>
                                </div>
                                <div className="tool compare">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                            </div>
                            <CustomButton  data={{ type: 'submit', title: 'Add to card', click: addProductToCart }}/>
                        </div> : ''
                }
            </div>
            <div className='product-info'>
                <Link onClick={scrollTop} to={props.data.link ? props.data.link+ '/' + props.data.id : '#'}><span className='product-name'>{props.data.name}</span></Link>
                <div className='sold-by'><span className='light'>Sold by:</span> {props.data.sold_by}</div>
                <RatingBlock rating={props.data.rating} />
                <div className="price-block">
                    <span className='price'>{props.data.discounted ?  `$${+props.data.price - ((+props.data.price * +props.data.discounted) / 100)}` : `$${props.data.price}`}</span>
                    {props.data.discounted ? <span className='sale-price'> {`$${props.data.price}`}</span> : ''}
                </div>
            </div>
        </div>
    )
}