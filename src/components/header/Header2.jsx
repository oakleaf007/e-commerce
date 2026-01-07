
import {Link} from "react-router-dom"
import "./header2.css";

export default function BottomHeader(){
    return(
        <div id="bottom-header">
            <div id="bottom-bar">

                <Link to="/" className="link-btn">
                <img src="/home1.svg" width={"24px"}></img>
                </Link>

                <Link to="/settings" className="link-btn">
               <img src="/settinfs1.svg" width={"24px"}></img>
                </Link>

                <Link to="/cart" className="link-btn">
                <img src="/cart1.svg" width={"24px"}></img>
                 </Link>

                 <Link to="/wish" className="link-btn">
               <img src="/wish1.svg" width={"24px"}></img>
                </Link>
                
                <Link to="/account" className="link-btn">
               <img src="/account1.svg" width={"24px"}></img>
                </Link>
            </div>
        </div>

    )
}