import { useState } from 'react'

import {Routes, Route} from "react-router-dom";

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Home from "./entry/Home";
import About from './components/about/About';
import BottomHeader from './components/header/Header2';

import Signin from './entry/Signin';
const preview = false;


export default function App() {

if(preview){


  return <main >
    
    </main>
}

return(<>
    <Header />
    <main >
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/signin" element={<Signin />}/>
      </Routes>
      
         
      </main>
      <About />
    <Footer />
     <BottomHeader />
</>)
 
}