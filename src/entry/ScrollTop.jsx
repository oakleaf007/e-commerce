import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop(){

    const {pathname} = useLocation();

    useEffect(()=>{
         const main = document.querySelector("main");
       if (main) main.scrollTop = 0;
  }, [pathname]);
    return null;
}