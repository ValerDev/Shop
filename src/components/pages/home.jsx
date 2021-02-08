import React, { useContext } from 'react';
import '../../assets/css/components/pages/home.scss';
import CustomCarusel from '../carusel/customCarusel';
import MiniInfoBlock from '../blocks/miniInfoBlock';
import ImageBanner from '../blocks/imageBanner';
import ProductItem from '../blocks/productItem';
import MenuSection from '../menuSection/menuSection';
import CustomTicker from '../carusel/customTicker';
import { BlogItem } from '../blocks/blogItem';
import Context from '../../context';



export default function Home(props) {

    const coState = useContext(Context);
    // coState.state.home.products.new_arrivals.map(item=>item)
    return (
        <section id='home'>
            <CustomCarusel data={{
                height: props.maxWidth > 767 ? '350px' : props.maxWidth > 575 ? '300px' :  props.maxWidth > 425 ? '225px' : '165px',
                images: props.maxWidth > 767 ? ['http://blueskytechmage.com/ayo/pub/media/slidebanner/s/l/slideshow6_1.jpg', 'http://blueskytechmage.com/ayo/pub/media/slidebanner/s/l/slideshow6_2.jpg', 'http://blueskytechmage.com/ayo/pub/media/slidebanner/s/l/slideshow6_3.jpg'] : ['http://blueskytechmage.com/ayo/pub/media/slidebanner/s/l/slideshow6_mb2.jpg', 'http://blueskytechmage.com/ayo/pub/media/slidebanner/s/l/slideshow6_mb1.jpg', 'http://blueskytechmage.com/ayo/pub/media/slidebanner/s/l/slideshow6_mb3.jpg'],
                size: props.maxWidth > 767 ? 'cover' : 'contain',
            }} />

            <div className='mini-info-blocks'>
                <div className="layout">
                    <MiniInfoBlock description='For all orders over $120' title='Free Delivery' img='/images/introduct1.svg' />
                    <MiniInfoBlock description='100% secure payment' title='Safe Payment' img='/images/introduct2.svg' />
                    <MiniInfoBlock description='If goods have problems' title='Shop With Confidence' img='/images/introduct3.svg' />
                    <MiniInfoBlock description='Dedicated 24/7 support' title='24/7 Help Center' img='/images/introduct4.svg' />
                    <MiniInfoBlock description='30 day satisfaction guarantee' title='Friendly Services' img='/images/introduct5.svg' />
                </div>
            </div>
            <div className='layout'>
                <div className='banners-block'>
                    <ImageBanner img='http://blueskytechmage.com/ayo/pub/media/banner6_1.jpg' height='400px' />
                    <div className='center-block'>
                        <ImageBanner height='192px' img='http://blueskytechmage.com/ayo/pub/media/banner6_2.jpg' />
                        <ImageBanner height='192px' img='http://blueskytechmage.com/ayo/pub/media/banner6_3.jpg' />
                    </div>
                    <ImageBanner img='http://blueskytechmage.com/ayo/pub/media/banner6_4.jpg' height='400px' />
                </div>
                <MenuSection data={{
                    products: [
                    //   coState.state.home.products.new_arrivals.map((item,i) => <ProductItem key={i} data={item}/>)
                      <ProductItem data={coState.state.home.categories.new_arrivals.products[0]}/> ,
                      <ProductItem data={coState.state.home.categories.new_arrivals.products[1]}/> ,
                      <ProductItem data={coState.state.home.categories.new_arrivals.products[2]}/> ,
                      <ProductItem data={coState.state.home.categories.new_arrivals.products[0]}/> ,
                      <ProductItem data={coState.state.home.categories.new_arrivals.products[1]}/> ,
                      <ProductItem data={coState.state.home.categories.new_arrivals.products[2]}/> ,
                    ],
                    title: 'New arrival',
                    subtitle: 'Products',
                    shown: props.maxWidth > 1200 ? 6 : props.maxWidth > 800 ? 3 : props.maxWidth > 425 ? 2 : 1,
                    rows: 1,
                }} />
            </div>
            <div className='onsale-product'>
                <div className="slider">
                    <MenuSection
                        data={{
                            products: [
                    //   coState.state.home.products.on_sale.map((item,i) => <ProductItem key={i} data={item}/>)
                                <ProductItem data={coState.state.home.categories.on_sale.products[0]}/> ,
                                <ProductItem data={coState.state.home.categories.on_sale.products[1]}/> ,
                                <ProductItem data={coState.state.home.categories.on_sale.products[2]}/> ,
                                <ProductItem data={coState.state.home.categories.on_sale.products[0]}/> ,
                                <ProductItem data={coState.state.home.categories.on_sale.products[1]}/> ,
                                <ProductItem data={coState.state.home.categories.on_sale.products[2]}/> ,
                            ],
                            title: 'On Sale',
                            subtitle: 'Products',
                            scrollCount: props.maxWidth <= 767 ? 1 : 2,
                            shown: props.maxWidth <= 767 ? 1 : 2,
                            rows: props.maxWidth > 475 ? 2 : 3,
                        }}
                    />

                </div>
            </div>
            <div className='home-ticker' onMouseOver={() => props.ticker[1](false)} onMouseOut={() => props.ticker[1](true)}>
                <CustomTicker move={props.ticker[0]} data={{
                    content: <div style={{ display: 'flex' }}><p>Free UK delivery - Return over $100.00 ( Excluding Homeware ) | Free UK Collect From Store</p>
                        <p>Design Week / <strong>15% Off </strong> the website / Code: AYOSALE-2020</p>
                        <p>Orders shipping as usual. See more: COVID-19 FAQ</p>
                        <p>Always iconic. Now organic. Introducing the $20 Organic Tee. </p>
                        <p>With each receipt over $150 from AYO Store get voucher <strong>15% off</strong> immediately.</p></div>
                }} />
            </div>
            <div className='layout'>
                <div className='topbestselling-product'>
                    <MenuSection data={{
                      products: [
                    //   coState.state.home.products.top_best_selling.map((item,i) => <ProductItem key={i} data={item}/>)
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[0]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[1]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[2]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[3]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[0]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[1]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[2]}/> ,
                          <ProductItem data={coState.state.home.categories.top_best_selling.products[3]}/> ,
                        ] ,
                        title: 'Top Best Selling',
                        subtitle: 'Product',
                        shown: props.maxWidth > 1200 ? 6 : props.maxWidth > 800 ? 3 : props.maxWidth > 425 ? 2 : 1,
                        rows: 1,
                        submenus: [
                            { title: 'Phones & Tablets' },
                            { title: 'Electronic & Digital' },
                            { title: 'Fashion & Clothin' },
                        ],
                    }} />
                </div>
                <MenuSection data={{
                    products: [
                        <BlogItem data={{
                            img: 'http://blueskytechmage.com/ayo/pub/media/rokanthemes/blog/images/b/l/blog_1thumb.jpg',
                            name: 'Praesent Volutpat Justo Burgundy Suspendisse.',
                            link: '#blog',
                            date: '01-May-2020'
                        }} />,
                        <BlogItem data={{
                            img: 'http://blueskytechmage.com/ayo/pub/media/rokanthemes/blog/images/b/l/blog_2thumb_1.jpg',
                            name: 'Fringilla Suspendisse Praesent Volutpat Justo.',
                            link: '#blog',
                            date: '01-May-2020'
                        }} />,
                        <BlogItem data={{
                            img: 'http://blueskytechmage.com/ayo/pub/media/rokanthemes/blog/images/b/l/blog_3thumb.jpg',
                            name: 'Justo Suspendisse Praesent Volutpat Fringilla.',
                            link: '#blog',
                            date: '01-May-2020'
                        }} />,
                        <BlogItem data={{
                            img: 'http://blueskytechmage.com/ayo/pub/media/rokanthemes/blog/images/b/l/blog_4thumb.jpg',
                            name: 'Suspendisse Praesent Volutpat Justo Fringilla.',
                            link: '#blog',
                            date: '01-May-2020'
                        }} />,
                        <BlogItem data={{
                            img: 'http://blueskytechmage.com/ayo/pub/media/rokanthemes/blog/images/b/l/blog_5thumb.jpg',
                            name: 'Volutpat Justo Suspendisse Praesent Burgundy',
                            link: '#blog',
                            date: '01-May-2020'
                        }} />,
                        <BlogItem data={{
                            img: 'http://blueskytechmage.com/ayo/pub/media/rokanthemes/blog/images/b/l/blog_1thumb.jpg',
                            name: 'Volutpat Justo Suspendisse Praesent Fringilla.',
                            link: '#blog',
                        }} />,
                    ],
                    title: 'From Our',
                    shown: props.maxWidth > 1200 ? 4 : props.maxWidth > 800 ? 3 : props.maxWidth > 480 ? 2 : 1,
                    rows: 1,
                    subtitle: 'Blog',
                }} />

            </div>

        </section>
    )
}