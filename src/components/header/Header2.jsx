
import {Link} from "react-router-dom"
import "./header2.css";

export default function BottomHeader(){
    return(
        <div id="bottom-header">
            <div id="bottom-bar">

                <Link to="/">
                 <button id="home"><img src="/home1.svg" width={"24px"}></img></button>

                </Link>
                <button id="settings"><img src="/settinfs1.svg" width={"24px"}></img></button>

                <Link to="/cart">
               
                <button id="cart"><img src="/cart1.svg" width={"24px"}></img></button>
                 </Link>
                <button id="wish"><img src="/wish1.svg" width={"24px"}></img></button>
                <Link to="/account">
                <button id="myaccount"><img src="/account1.svg" width={"24px"}></img></button>
                </Link>
            </div>
        </div>

    )
}