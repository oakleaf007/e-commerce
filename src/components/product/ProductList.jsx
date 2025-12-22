import "./product.css";

export default function ProductList(){
    return(
        <div id="deals-container">
          
          <div className="deal-box">
                
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/shoes.webp" ></img></div> 
                 <div><span className="prod-name">Shoes</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/decor.webp" ></img></div> 
                 <div> <span className="prod-name">Decor</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/shorts.webp"></img></div> 
                  <div><span className="prod-name">Shorts</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/long.webp"></img></div> 
                  <div><span className="prod-name">Pants</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                
            </div>
            <div className="deal-box">
                
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/shoes.webp" ></img></div> 
                 <div><span className="prod-name">Shoes</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/decor.webp" ></img></div> 
                 <div> <span className="prod-name">Decor</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/shorts.webp"></img></div> 
                  <div><span className="prod-name">Shorts</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                <div className="deal-img"><div className="product-img"><img className="img-height" src="/long.webp"></img></div> 
                  <div><span className="prod-name">Pants</span>
                <span className="prod-price">Min. 30% off</span></div>
                </div>
                
            </div>

        </div>
    )
}