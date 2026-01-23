import './wishlist.scss'

export default function WishList(){

    return(
        <div id="wishlist-container" className='container'> 
            <h5>My Wishlist</h5>
            <div id="top-bar">
                
            </div>

            <div id='card-container'>
               
                <div className='wish-card'>
                     <button id='kebab-btn'><i className="fa-solid fa-ellipsis-vertical"></i></button>
                    <div className='img-cont'><img src='./product1.png'></img></div>
                    <div className='product-info'>
                        <div>
                            <span>Afghani Lehenga</span><br></br>
                         <span>&#x20B9; 23000</span>
                         </div>
                      
                    </div>
                    <div className='button-cont'><button>Add to cart</button></div>
                    
                </div>
                 <div className='wish-card'>
                     <button id='kebab-btn'><i className="fa-solid fa-ellipsis-vertical"></i></button>
                    <div className='img-cont'><img src='./product1.png'></img></div>
                    <div className='product-info'>
                        <div>
                            <span>Afghani Lehenga</span><br></br>
                         <span>&#x20B9; 23000</span>
                         </div>
                      
                    </div>
                    <div className='button-cont'><button>Add to cart</button></div>
                    
                </div>


            </div>
        </div>
    )
}