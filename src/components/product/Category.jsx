import "./category.css";


export default function Category(){
    return(
        <div id="cat-container">
            <div id="cat">
                <div className="cat-card"><img src="/category/clothin.jpeg" alt="cat-img"></img><span>Cloths &rarr;</span></div>
                <div className="cat-card"><img src="/category/skin.png" alt="cat-img"></img><span>Skincare &rarr;</span></div>
                <div className="cat-card"><img src="/category/shoes.png" alt="cat-img"></img><span>Shoes &rarr;</span></div>
                <div className="cat-card"><img src="/category/catimg2.jpeg" alt="cat-img"></img><span>Lehengas &rarr;</span></div>
                <div className="cat-card"><img src="/category/clothin.jpeg" alt="cat-img"></img><span>Electronics &rarr;</span></div>
                <div className="cat-card"><img src="/category/catimg2.jpeg" alt="cat-img"></img><span>Beauty &rarr;</span></div>
                <div className="cat-card"><img src="/category/catimg2.jpeg" alt="cat-img"></img><span>Fitness &rarr;</span></div>
                <div className="cat-card"><img src="/category/catimg2.jpeg" alt="cat-img"></img><span>Jewelry &rarr;</span></div>
                <div className="cat-card"><img src="/category/catimg2.jpeg" alt="cat-img"></img><span>Kitchen &rarr;</span></div>
              
            </div>

        </div>
    )
}