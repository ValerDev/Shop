import '../assets/css/footer.scss';
import {
    Link
} from "react-router-dom";
import CustomInput from './inputs/customInput';
import CustomButton from './inputs/customButton';

export default function Footer(props) {

    return (
        <footer>
            <div className='top-footer'>
                <div className='layout'>
                    <div className='news-letter-info'>
                        <div className='icon'></div>
                        <div className='info-block'>

                            <h3> {props.data.top_footer.news_letter.title}</h3>
                            <span>{props.data.top_footer.news_letter.description}</span>
                        </div>
                    </div>
                    <div className='subscribe-block'>
                        <div className='subscribe'>
                            <form action='/subscribe'>
                                <CustomInput data={{ placeholder: props.data.top_footer.subscribe.placeholder, type: 'email' }} />
                                <CustomButton data={{ title: props.data.top_footer.subscribe.button }} />
                            </form>
                        </div>
                    </div>
                    <div className='support-block'>
                        <div className='icon'></div>
                        <div className='support-info'>
                            <span>{props.data.top_footer.support.description}</span>
                            <h3> {props.data.top_footer.support.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-footer'>
                <div className='layout'>

                    <div className='info-block'>
                        <div className='logo-block' onClick ={() => props.scrollTop() }>
                            <Link to='/'>
                                <div className='logo'></div>
                            </Link>
                        </div>
                        <span className='description'>{props.data.main_footer.description}</span>
                        <div className='contact-info'>
                            <div className='contact-icon'></div>
                            <div className='info-block'>
                                <span className='title'>{props.contact.title}</span>
                                <span className='phone'>{props.contact.phone}</span>
                            </div>
                        </div>
                        <span className='location'>{props.location.add}</span>
                    </div>
                    <div className='links-block'>
                        {props.data.main_footer.links.map((gen,i) => <ul key={i} style={{ fontWeight: gen.general ? 800 : 500 }}>{gen.title} {gen.sub_menus.map((sub,i) => <li key={i}  style={{ fontWeight: sub.general ? 800 : 500 }}><Link onClick ={() => props.scrollTop() } to={`/${sub.link}`}>{sub.title}</Link></li>)}</ul>)}
                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                <div className='layout'>
                    <span className='copyright'> Copyright © <a href='/ayo'>Ayo</a> All Rights Reserved. <a href='/ayo'>The Blue Sky.</a> </span>
                    <img src="http://blueskytechmage.com/ayo/pub/media/payment_6.png" alt="payments"/>
                </div>
            </div>
        </footer>
    )
}