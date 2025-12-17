import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Home from "./entry/Home";

export default function App() {

return(<>
    <Header />
    <main >
        <Home />
      </main>
    <Footer />
</>)
 
}