import "../../assets/css/components/inputs/dubleRange.scss";
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
    root: {
        width: 200,
        marginRight: -150,
    },
});

function valuetext(value) {
    return `${value}`;
}

export default function RangeSlider(props) {
    const location = useLocation();

    const [isRangeOpen, setisRangeOpen] = useState(false);
    const classes = useStyles();
    const [value, setValue] = useState([props.minPrice, props.maxPrice]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onchangePrice(newValue)
    };

    useEffect(() => {
        setValue([props.minPrice, props.maxPrice])
    }, [location.pathname]);

    return (
        <div className={classes.root} >
            <div className="custom-range">

                <div className="title-block" onClick={() => setisRangeOpen(!isRangeOpen)}>
                    <h3 id="range-slider">
                        {props.title}
                    </h3>
                    <i className={isRangeOpen ? 'fas fa-chevron-right open-icon' : 'fas fa-chevron-right'}></i>
                </div>
                <div className={isRangeOpen ? "range-main-content range-main-content-open" : 'range-main-content'}>

                    <div className='prices-block'>
                        <span className="price min">{`$${value[0]} - `}</span>
                        <span className="price max">{` $${value[1]}`}</span>
                    </div>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        min={props.minPrice}
                        max={props.maxPrice}
                    />
                </div>
            </div>
        </div>

    );
}
