import { Link } from "react-router-dom"
import "./Not.css";
export default function NotLoggedIn(){
        return(
            <div style={{ margin: "0 auto", display: "flex" , flexDirection: "column", minHeight: "50%", placeContent: "center"} }>
                <p>Not logged in?</p>
                
                <Link to="/signin" id="button" style={{ textAlign:"center", padding: "5px", textDecoration:"none",  borderRadius:"4px"}}>Go to login</Link>

            </div>
        )
}