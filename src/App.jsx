import { useState , useRef} from 'react'

import {Routes, Route} from "react-router-dom";






import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Home from "./entry/Home";
import About from './components/about/About';
import BottomHeader from './components/header/Header2';

import ScrollTop from './entry/ScrollTop';
import Signin from './entry/Signin';
import Signup from './entry/Signup';
import Cart from './components/cart/Cart';
import ProductDetails from './components/product/ProductDetails';

import MyAccount from './components/account/MyAccount';
import Settings from './components/settings/Settings';

import WishList from './components/wishlist/Wishlist';

const preview = false;


export default function App() {

if(preview){


  return <main >
    <Settings />
    </main>
}

return(<>
    <ScrollTop />
    <Header />  
    <main >
 
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/wish' element={<WishList />} />
        <Route path="/account" element={<MyAccount />} />
       
      </Routes>
        <About />
    <Footer />
     
            
      </main>
     
      <BottomHeader />
  
</>)
 
}