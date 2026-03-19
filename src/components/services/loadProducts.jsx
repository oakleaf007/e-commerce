export const loadProducts = async(limit, offset)=>{

    
    const url = `http://localhost:3000/api/v1/products?limit=${limit}&offset=${offset}`;

    try{
        
        const res = await fetch(url);

        
        const data = await res.json();
        if(!res.ok){
            throw new Error(data.message || "error fetching api")
        }
        return data;

    }catch(err){
        console.log(err);
    }

}