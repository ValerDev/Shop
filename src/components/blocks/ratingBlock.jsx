import React, { useState } from 'react';
import '../../assets/css/components/blocks/ratingBlock.scss';

export default function RatingBlock(props) {
    const [rating, setRating] = useState(props.rating)
    return (
        <div className='rating-block'>
            <i className={rating >= 1 ? "fas fa-star full" : "far fa-star empty"} onClick={() => setRating(1)} ></i>
            <i className={rating >= 2 ? "fas fa-star full" : "far fa-star empty"} onClick={() => setRating(2)} ></i>
            <i className={rating >= 3 ? "fas fa-star full" : "far fa-star empty"} onClick={() => setRating(3)} ></i>
            <i className={rating >= 4 ? "fas fa-star full" : "far fa-star empty"} onClick={() => setRating(4)} ></i>
            <i className={rating >= 5 ? "fas fa-star full" : "far fa-star empty"} onClick={() => setRating(5)} ></i>
        </div>
    )
}