import "./home.css";

import RatingStars from "../components/product/Rating";
import Category from "../components/product/Category";

import ProductList from "../components/product/ProductList";

import { loadProducts } from "../components/services/loadProducts";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Landing(){
  const [prods, setprods] = useState([]);
   const apiUrl = import.meta.env.VITE_API_URL;

useEffect(()=>{

  async function loadProds(){
      try{
        let limit = 10;
        let offset = 0;
        const res = await loadProducts(limit, offset);
        console.log(res);
        if(res.success){
          setprods(res.data);
          console.log(res.data);

        }
      }catch(err){
        console.error("error during product loading: ",err)
      }
  }
  loadProds();

},[])

return(
    <div id="home-parent">

 
    <div id="intro">
        <p id="welcome-para">Welcome to the Penguin wear.</p>
        <button id="shop-btn">Get started &rarr;</button>
        
    </div>

    <div id="label">
        Shop by categories

    </div>
  <div style={{width: "100%"}}>
    <Category />

     <div id="label">
        Don't miss

    </div>
  <ProductList />
</div>

    <div id="label">
        Top Deals

    </div>
    <div className="product-cont">
         {prods.map((p)=>(
                <div className="prod-card">
                     <Link to="/productdetails"><div className="img"><img src={p.image_url}></img></div></Link>
                    <div className="desc">
                        <span className="prod-name">{p.name}</span>
                        <span className="prod-price">&#x20B9; {p.price}</span>
                        <RatingStars />
                              {/* <div id="shop-btns">
                                <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                                <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>
        
                              </div> */}
                        </div>    
                </div>
        
              ))}
     
      

    </div>

       </div>
       
        
)
}