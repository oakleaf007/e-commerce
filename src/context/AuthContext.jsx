import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({children}){
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(
        !!localStorage.getItem("token")
    );
    const [profile, setProfile] = useState(null);

  useEffect(()=>{
    const profile = localStorage.getItem("profile");
    if(profile){
        setProfile(JSON.parse(profile));
    }
  },[])


    async function loadProfile(token){
          
      
           const res = await fetch("http://localhost:3000/api/v1/profile",{
            method: "GET",
            headers: {Authorization: `Bearer ${token}`}
        });

        const data = await res.json();
        localStorage.setItem("profile",JSON.stringify(data));
        setProfile(data);
        setLoggedIn(true);
        return true;
       
    }



    async function login(token){
        localStorage.setItem("token", token);
       
      const success = await loadProfile(token);
      if(success) navigate("/");
        
    }


    function logOut(){
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        setLoggedIn(false);
        setProfile(null);
        navigate("/");
    }
   

    return(
        <AuthContext.Provider value={{isLoggedIn,login, logOut, profile,setProfile}}>
        {children}

        </AuthContext.Provider>
    )



}