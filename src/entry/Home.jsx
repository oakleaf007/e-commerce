import "./home.css";

import RatingStars from "../components/product/Rating";
import Category from "../components/product/Category";

import ProductList from "../components/product/ProductList";

export default function Home(){
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
        <div className="prod-card">
            <div className="img"><img src="/category/catimg2.jpeg"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      {/* <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div> */}
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/category/catimg2.jpeg"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      {/* <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div> */}
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/category/catimg2.jpeg"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      {/* <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div> */}
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/category/catimg2.jpeg"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      {/* <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div> */}
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/category/catimg2.jpeg"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      {/* <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div> */}
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/category/catimg2.jpeg"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>

                      <RatingStars />
                      {/* <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div> */}
                </div>    
     
        </div>

    </div>

       </div>
       
        
)
}