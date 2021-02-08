import '../../assets/css/components/blocks/imageBanner.scss'
import {
    Link
} from "react-router-dom";

export default function ImageBanner(props) {
    return (
        <div className='image-banner' style={{ width: props.width ? props.width : '500px', height: props.height ? props.height : '250px' }}>
            <Link to={props.link ? props.link : '#'}>
                <div className='image' style={{ backgroundImage: `url(${props.img})` }}></div>
            </Link>
        </div>
    )
}