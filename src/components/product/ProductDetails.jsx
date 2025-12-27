import "./productDetails.css";

import RatingStars from "./Rating";
import Review from "./ReviewSection";
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
                        <div id="buy-now"><span style={{display:"flex", gap:"10px"}}><i className="fa-solid fa-bag-shopping" style={{fontSize:"16px"}}></i>Buy now</span></div>
                        <div id="add-cart"><img src="/cart.svg" width={"20px"}></img><span>Add to cart</span></div>

                      </div>
                </div>
            </div>

            {/* contains product infos */}
            <div id="product-info">
                <h4>Chinese lehenga</h4>
                <RatingStars />
                  <div className="price-row">
    <span className="mrp"><strike style={{color:"red"}}>₹1,599</strike></span>
     <span className="price"> ₹1,200</span>
   
    <span className="discount" style={{display:"block"}}>25% OFF</span>
  </div>

  <p className="short-desc">
    Premium quality chinese lehenga, perfect for daily wear and festive occasions.
  </p>


  <div id="delivery-info">
    <h5 style={{display:"inline-block"}}>Delivery</h5>
     <div style={{display:"flex", flexDirection:"column"}}>
        <span><input id="delivery-pin" type="number" placeholder="Enter pincode"></input> <button id="pin-check">Check</button></span>
    <div id="delivery-time">Delivery in 9 days</div>
    </div>
  </div>


  <div id="specification" style={{marginTop:"20px"}}>
    <h5>Specification</h5>

    <div id="specs-box">
        <div className="specs-el">
         <span>Brand</span> <span>Carbon mono oxide</span>
        </div>
         <div className="specs-el">
         <span>Color</span> <span>African black</span>
        </div>
       
    </div>
    <div id="review-box">
        <h5>Review</h5>
        <Review />
    </div>
  </div>
            </div>


            </div>



        </div>

    )
}