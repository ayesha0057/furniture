import React from "react";
const Arrival=(props)=>{
    return(

        <div className="container">
<div className="row">
    <div className="col text-center new-arr">
 <h1> {props.new_product[0].heading}</h1>
 <h1>   {props.new_product[0].heading2}</h1>
 <p className="text-center"> {props.new_product[0].para} </p>
    </div>
</div>
<div className="container-fluid">
    <div className="row pt-5">
        <div className="col-6">
<div className="imgaes p1" style={{backgroundImage:props.new_product[0].img_side}}>
<div className="category-item">
    <h2>Visit Us</h2>
    <h6>
    Head Office <br/>
16 Boulevard Saint-Germainbr <br/>
75005 Paris
    </h6>
    <button className="btn ">  Contact Us </button>
</div>
</div>
        </div>
        <div className="col-6">
        <div className="imgaes p2" style={{backgroundImage:props.new_product[0].img_side1}}>
<div className="category-item">
    <h2>Follow Our Store
On Instagram</h2>
   
    <button className="btn ">  Contact Us </button>
</div>
</div>

        </div>
    </div>
</div>

        </div>
    )
};
export default Arrival;