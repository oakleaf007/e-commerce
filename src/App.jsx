import { useState , useRef} from 'react'

import {Routes, Route} from "react-router-dom";


<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
/>



import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Home from "./entry/Home";
import About from './components/about/About';
import BottomHeader from './components/header/Header2';

import ScrollTop from './entry/ScrollTop';
import Signin from './entry/Signin';
import Signup from './entry/Signup';

import ProductDetails from './components/product/ProductDetails';
const preview = false;


export default function App() {

if(preview){


  return <main >
    
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
        <Route path='/productdetails' element={<ProductDetails/>}/>
      </Routes>
        <About />
    <Footer />
     
            
      </main>
     
      <BottomHeader />
  
</>)
 
}