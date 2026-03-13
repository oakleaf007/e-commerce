import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export function AuthProvider({children}){
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    function login(token){
        localStorage.setItem("token", token);
        setLoggedIn(true);
        navigate("/");
    }
    function logOut(){
        localStorage.removeItem("token");
        setLoggedIn(false);
    }

    return(
        <AuthContext.Provider value={{isLoggedIn,login, logOut}}>
    {children}

        </AuthContext.Provider>
    )



}