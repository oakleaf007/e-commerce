import { useState , useRef} from 'react'

import {Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Home from "./entry/Home";
import About from './components/about/About';
import BottomHeader from './components/header/Header2';

import ScrollTop from './entry/ScrollTop';
import Signin from './entry/Signin';
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
        
      </Routes>
        <About />
    <Footer />
     
            
      </main>
     
      <BottomHeader />
  
</>)
 
}