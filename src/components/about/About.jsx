import "./about.css";

export default function About(){
   
return(
    <div>
        <div id="about-container">
            <div className="about-us">
                <span style={{color: " #F1E9DC" ,fontWeight: 'bold'}}>CONTACT US</span>
                <br></br>
                <span>Ph:</span>
                <br></br>
                <span>Email:</span>
            </div>
            <div id="devider"></div>
            <div className="help">
                <span style={{color: " #F1E9DC",fontWeight: 'bold'} }>HELP?</span>
                <ul>
                    <li><a href="">Payments</a></li>
                    <li><a href="">Returns</a></li>
                    <li><a href="">FAQ</a></li>
                   
                </ul>
            </div>
            <div id="devider"></div>
                <div id="address">
                    <span style={{color: " #F1E9DC" ,fontWeight: 'bold'}}>ADDRESS</span>
                <br></br>
                <span>Wuhan city,</span>
                <br></br>
                <span>China</span>
                </div>
            
        </div>
    </div>
)
    
}