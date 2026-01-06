import "./myaccount.scss"

import { useState } from "react"

export default function MyAccount(){
    const [piValue, setPiValue] = useState(true);
    const [cpValue, setCpValue] = useState(false);

    return(
        <div id="account-container" className="container">
            <div id="left-container">
                <div id="customer-intro">
                    <div id="customer-pic">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    Hello, <span id="customer-name" >Penguin</span>
                </div>
                <div id="customer-options">
                    <h4>Account settiings</h4>
                    <ul>
                        <li onClick={()=>{ setPiValue(true); setCpValue(false); }}>Profile Info <i className="fa-solid fa-angle-right"></i></li>
                        <li>Saved Adresses <i className="fa-solid fa-angle-right"></i></li>
                        <li>My Coupons <i className="fa-solid fa-angle-right"></i></li>
                        <li>My Reviews <i className="fa-solid fa-angle-right"></i></li>
                       
                      
                    </ul>
                    
                </div>
                  <div id="customer-options">
                    <h4>Account access</h4>
                    <ul>
                        <li onClick={()=>{setCpValue(true); setPiValue(false);} }>Change Password <i className="fa-solid fa-angle-right"></i></li>
                      <div id="logout-container">
                        <button id="logout" ><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
                    </div>
                    </ul>
                  
                </div>
                
            </div>
            <div id="right-container">
                <div className={` ${piValue ? "personal-content" : "personal-hide"  }`}>
                    <h4>Personal Info:</h4>
                    < div id="input-container">
                        <label htmlFor="" >Customer Name <i className="far fa-edit"></i></label>
                        <input type="text" name="customer-name" placeholder="Name" disabled value="Oak Leaf"></input>
                         <label htmlFor="" >Gender <i className="far fa-edit"></i></label>
                        <div id="gender-container">
                        <input type="radio" name="gender" value="male"></input><label htmlFor=""  >Male</label>
                        <input type="radio" name="gender" value="female" ></input><label htmlFor="" >Female</label>
                        </div>
                         <label htmlFor="" >Customer Email</label>
                        <input type="text" name="customer-email" placeholder="Email" disabled value="Oak Leaf"></input>
                         <label htmlFor="" >Phone Number</label>
                        <input type="text" name="customer-phone" placeholder="Phone" disabled value="Oak Leaf"></input>
                   </div>
                </div>
                
                <div  className={`${cpValue ? "password-container" : "change-password"}`}>
                    <h4>Reset Password:</h4>
                    <label htmlFor="" >Enter existing password </label>
                        <input type="text" name="existing-password" placeholder="enter existing password"  ></input>
                        <label htmlFor="" >Enter new password </label>
                        <input type="text" name="new-password" placeholder="new password" ></input>
                        <label htmlFor="" >Confirm password </label>
                        <input type="text" name="confirm-password" placeholder="confirm password"  ></input>
                        <button type="submit">Submit</button>
                </div>
              
            </div>
        
        </div>

    )
}