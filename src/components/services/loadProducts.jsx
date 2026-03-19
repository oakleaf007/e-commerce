export const loadProducts = async(limit, offset)=>{

    
    const url = import.meta.env.VITE_API_URL;

    try{
        
        const res = await fetch(`${url}/products`);

        
        const data = await res.json();
        if(!res.ok){
            throw new Error(data.message || "error fetching api")
        }
        return data;

    }catch(err){
        console.log(err);
    }

}