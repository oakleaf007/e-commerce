import "./productDetails.css";

import RatingStars from "./Rating";
export default function ProductDetails(){
    return(
        <div className="product-conatiner">
            <div id="product-details">

                {/* contains product image and btns and headers */}
            <div className="product-left">
                <div className="product-image">
                <img src="/product1.png"></img>
                </div>
                <div id="img-nav">
                    <div className="img-preview">
                        <img src="/product1.png"></img>
                    </div>
                </div>
                <div id="product-btns">
                    <div id="shop-btns">
                        <div id="buy-now"><img src="/buy.svg" width={"20px"}></img><span>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img><span>Add to cart</span></div>

                      </div>
                </div>
            </div>

            {/* contains product infos */}
            <div id="product-info">
                <h2>Chinese lehenga</h2>
                <RatingStars />
                  <div className="price-row">
    <span className="mrp"><strike style={{color:"red"}}>₹1,599</strike></span>
     <span className="price"> ₹1,200</span>
   
    <span className="discount" style={{display:"block"}}>25% OFF</span>
  </div>

  <p className="short-desc">
    Premium quality chinese lehenga, perfect for daily wear and festive occasions.
  </p>
            </div>


            </div>



        </div>

    )
}