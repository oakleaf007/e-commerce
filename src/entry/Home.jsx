import "./home.css";

import About from "../components/about/About";
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
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                </div>    
        </div>
        <div className="prod-card">
            <div className="img"><img src="/product1.png"></img></div>
            <div className="desc">
                <span className="prod-name">Chinese lehenga</span>
                <span className="prod-price">&#x20B9; 6900</span>
                </div>    
        </div>
    </div>

    <About />
       </div>
        
)
}