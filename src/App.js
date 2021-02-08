import React, { useState, useEffect } from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Footer from './components/fotter';
import Home from './components/pages/home';
import * as Scroll from 'react-scroll';
import ProductPage from './components/pages/productPage';
import Context from './context'
import CategoryPage from './components/pages/categoryPage';

const scroll = Scroll.animateScroll;

function App(props) {
  const [scrolled, setScrolled] = useState(false)

  window.addEventListener('scroll', () => {
    document.querySelector("html").scrollTop > 100 ? setScrolled(true) : setScrolled(false);
  });
  const scrollTop = () => {
    scroll.scrollTo(0);
  }

  const [tickerMove, setTickerMove] = useState(true)
  const [maxWidth, setMaxWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setMaxWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })

  const [openMobileMenu, setOpenMenu] = useState(false)


  return (
    <Context.Provider value={{state: props.state, functions: props.addProductToCart}}>
      <div className="App">
        <Router>
          <Header scrollTop={scrollTop} openMenu={[openMobileMenu, setOpenMenu]} data={props.state.header} counters={props.state.counters} location={props.state.location_info} contact={props.state.contact_info} maxWidth={maxWidth} />
          <Route path="/" exact>
            <Home data={props.state.home} maxWidth={maxWidth} ticker={[tickerMove, setTickerMove]} />
          </Route>
          <Route path={"/product/:id/"} >
            <ProductPage data={props.state.home.categories}  />
          </Route >
          <Route path={"/category/:id"} >
            <CategoryPage data={{name: 'some-Category'}}/>
          </Route >
          <Footer data={props.state.footer} scrollTop={scrollTop}  location={props.state.location_info} contact={props.state.contact_info} />
        </Router>
        <div className={scrolled ? 'jump-to-top jump-to-top-active' : 'jump-to-top'} onClick={scrollTop}>«</div>
      </div>
    </Context.Provider>
  );
}

export default App;



// ${props.state.productPage.products[0].name.split(' ').join('-')}