import React from "react";
const Product=(props)=>{

    let linkz=props.products[0].product.map((v,i)=>{
        return(
            <div  key={i}className="col-3 products">
            <img src= {v.bg_img} alt=""/>
            <div className="categoryies">
                 <h2>  {v.name}</h2>
                 <p> {v.price}</p>
                </div>
            </div>
        )
    })
     console.log(props.products)
    return(

        <div className="container"> 
<div className="row">
    <div className="col main-heading">
         <h1 className="text-center"> {props.products[0].heading} </h1>
         <p className="text-center"> {props.products[0].des} </p>
    </div>
</div>
<div className="row">
    {linkz}
    
</div>



        </div>
    )
};
export default Product;