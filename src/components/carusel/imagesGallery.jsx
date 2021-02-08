import React from "react";
import  "../../assets/css/components/carusel/imagesGallery.scss";
import ImageGallery  from 'react-image-gallery';

 
class ImagesGallery extends React.Component {
  render() {
    return <ImageGallery  lery items={this.props.images} lazyLoad={true} showPlayButton={false} slideOnThumbnailOver={true}/>;
  }
}


export default ImagesGallery;