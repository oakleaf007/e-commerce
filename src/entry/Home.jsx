import "./home.css";

import About from "../components/about/About";
import RatingStars from "../components/product/Rating";

export default function Home(){
return(
    <div id="home-parent">

 
    <div id="intro">
        <p id="welcome-para">Welcome to a world of timeless tradition and elegant ethnic fashion.</p>
        <button id="shop-btn">Get started &rarr;</button>
        
    </div>

    <div id="label">
        All Kollections

    </div>
    <div className="product-cont">
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                <RatingStars />
                      <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>

                      <RatingStars />
                      <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img></div>

                      </div>
                </div>    

              
        </div>



   



    </div>

    <About />
       </div>
        
)
}