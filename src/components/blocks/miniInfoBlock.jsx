import '../../assets/css/components/blocks/miniInfoBlock.scss';

export default function MiniInfoBlock(props){
    return(
        <div className='mini-info-block'>
            <div className='icon' style={{WebkitMaskImage: props.img ?  `url(${props.img})`: ''}}></div>
            <div className='content'>
                <h4 className='title'>{props.title ? props.title : "Title"}</h4>
                <span className='description'>{props.description ? props.description : "Description"}</span>
            </div>
        </div>
    )
}