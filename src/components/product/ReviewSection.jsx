import "./review.css"

import RatingStars from "./Rating"

export default function Review(){
    return(
        <div id="rating-parent">
            <div id="rating-cont">
                     <div id="rating">
                <span id="rating-num">5</span>
                 <span><i className="fa-solid fa-star"></i></span> 

                     
                 </div>
                 <div>
                    <span style={{fontSize:"16px", color:"#878787"}}>69 user ratings</span>
                 </div>
                
                <div><button id="rate-btn" >Rate</button></div>
                </div>

            <div>
                <div className="review-imgs">
                    <span>Images uploaded by customers:</span>
                    <div id="review-img-container">  
                        <div className="review-img" >
                            <img src="http://localhost:5173/product1.png"></img>
                        </div>
                    </div>
                </div>
                    <div className="user-review">
                  <span className="user-name">oak</span>
                    <span clasName="user-star"><RatingStars /></span>
                    <div className="user-uploaded-img">
                        <div className="user-img">
                            <img src="http://localhost:5173/product1.png"></img>
                        </div>
                    </div>
                    <p  className="review-para">Good quality product used for 69 days still going good</p>

                </div>

                    <div className="user-review">
                  <span className="user-name">Langra Penguin</span>
                    <span clasName="user-star"><RatingStars /></span>
                    <div className="user-uploaded-img">
                        <div className="user-img">
                            <img src="http://localhost:5173/product1.png"></img>
                        </div>
                    </div>
                    <p  className="review-para">My wife didnt like it..fitting is not up to the mark</p>

                </div>
            </div>
           
        </div>
    )
}