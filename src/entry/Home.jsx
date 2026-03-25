import "./home.css";

import RatingStars from "../components/product/Rating";
import Category from "../components/product/Category";

import ProductList from "../components/product/ProductList";


import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

import { loadProducts } from "../components/services/loadProducts";



export default function Home(){
  
  const [prods, setprods] = useState([]);

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
        <div className="prod-card" key={p.id}>
          <div className="wish-icon"><i class="fa-regular fa-heart"></i></div>
             <Link to="/productdetails"><div className="img"><img src={p.image_url} loading="lazy"></img></div></Link>
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