import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import '../../assets/css/components/carusel/customCarusel.scss'
export default class CustomSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
    };
    return (
      <div className='custom-carusel'>
        <Slider {...settings}>
          {this.props.data.images.map((img, i) => {
            return <div key={i}>
              <div key={i} className={`carusel-image img_${++i}`} style={{ backgroundImage: `url(${img})`,height: this.props.data.height,backgroundSize:this.props.data.size }}></div>
            </div>
          })} 
        </Slider>
      </div>
    );
  }
}

// style={{backgroundImage: `url(${this.props.data.images[0]})`}}