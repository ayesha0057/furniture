import React from "react";
const Header=(props)=>{
    return(

        
<div className="container-fluid main-head">
<div className="row">
    <div className=" col-lg col-md-6 col-md-12 col-sm-12 col-xs-12">
<div className="image text-center" style={{backgroundImage:props.header[0].header_front_img}}>
    <h1 >{props.header[0].heading}</h1>
   <button className="btn "> Shop Now</button>
   
</div>
    </div>
</div>

</div>


    )
};
export default Header;