import React from "react";

const ProductCard = ({products})=>{
    return (
        <div>
      {products.map((products) =>(
        <div key={products.id} style={{display:"flex"}}>
        <div>
        <img src={products.img} alt="product img" style={{width:"200px"}}/>
        <h3>Product-Name: {products.name} </h3>
        <h6 >Description: {products.description}</h6>
        <button >ADD TO CART</button>
        <div>
          <button>+</button>
          <button>-</button>
          <button>REMOVE FROM CART</button>
        </div>
        </div>
      </div>
      ))}
    </div>
    )
}

export {ProductCard};