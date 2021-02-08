import '../../assets/css/components/blocks/blogItem.scss';
import {Link} from 'react-router-dom'
export function BlogItem(props) {
    return(
        <div className='blog-item'>
            <Link to={props.data.link ? props.data.link : '' }>
                <div className='blog-content'>
                    <span className='image' style={{backgroundImage: props.data.img? `url(${props.data.img})` : ''}}></span>
                    <h3 className='name'>{props.data.name}</h3>
                    <span className='date'> Post Date: <span className='dmy'>{props.data.date ?  props.data.date : 'Day-Mounth-Year'}</span></span>
                </div>
            </Link>
        </div>
    )
}