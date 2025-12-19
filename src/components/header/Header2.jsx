
import {Link} from "react-router-dom"
import "./header2.css";

export default function BottomHeader(){
    return(
        <div id="bottom-header">
            <div id="bottom-bar">

                <Link to="/">
                 <button id="Home"><img src="/home1.svg" width={"24px"}></img></button>

                </Link>
                <button id="Home"><img src="/settinfs1.svg" width={"24px"}></img></button>
                <button id="Home"><img src="/cart1.svg" width={"24px"}></img></button>
                <button id="Home"><img src="/wish1.svg" width={"24px"}></img></button>
                <button id="Home"><img src="/account1.svg" width={"24px"}></img></button>
        
            </div>
        </div>

    )
}