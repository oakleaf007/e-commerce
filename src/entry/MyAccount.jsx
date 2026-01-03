import "./myaccount.css"

export default function MyAccount(){
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
                        <li>Profile Info <i className="fa-solid fa-angle-right"></i></li>
                        <li>Saved Adresses <i className="fa-solid fa-angle-right"></i></li>
                        <li>My Coupons <i className="fa-solid fa-angle-right"></i></li>
                        <li>My Reviews <i className="fa-solid fa-angle-right"></i></li>
                       
                      
                    </ul>
                    <div id="logout-container">
                        <button id="logout" ><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
                    </div>
                </div>
                
            </div>
            <div id="right-container">
                <div id="settings-content">
                    <h4>Personal Info:</h4>
                    <form>
                        <label htmlFor="" >Customer Name</label>
                        <input type="text" name="customer-name" placeholder="Name" disabled value="Oak Leaf"></input>
                         <label htmlFor="" >Gender</label>
                        <div id="gender-container">
                        <input type="radio" name="gender" value="male"></input><label htmlFor=""  >Male</label>
                        <input type="radio" name="gender" value="female" ></input><label htmlFor="" >Female</label>
                        </div>
                         <label htmlFor="" >Customer Email</label>
                        <input type="text" name="customer-email" placeholder="Email" disabled value="Oak Leaf"></input>
                         <label htmlFor="" >Phone Number</label>
                        <input type="text" name="customer-phone" placeholder="Phone" disabled value="Oak Leaf"></input>
                    </form>
                </div>
            </div>
        
        </div>

    )
}