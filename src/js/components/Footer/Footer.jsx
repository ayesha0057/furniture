import React from "react";

const Footer=(props)=>{

    let foot=props.footer[1].customer_links.map((v,i)=>{
        return(
<li key={i}><a href="#">{v.link1}</a></li>
        )
    })

    let foot1=props.footer[2].info_links.map((v,i)=>{
        return(
            <li key={i}><a href="#"> {v.link}</a></li>
        )
    })
    let foot2=props.footer[3].news_link.map((v,i)=>{
        return(
            <li key={i}><a href="#">{v.link}</a></li>
        )
    })
    let foot3=props.footer[4].contact_link.map((v,i)=>{
        return(
            <li key={i}><a href="#">{v.link}</a></li>
        )
    })
    console.log("footer", props.footer)
    return(
       
  <div className="container-fluid whole">
           
<div className="container">
    <div className="row footer-row">
        <div className="col-3 info footer-info1">
            <h4> {props.footer[0].about_part_title}</h4>
            <p> {props.footer[0].about_part_para}</p>
                 {/* <ul>
                     <i className="fa fa-twitter"></i>
                     <i className="fa fa-facebook"></i>
                     <i className="fa fa-tumblr"></i>
                     <i className="fa fa-google"></i>
                 </ul> */}
        </div>
        <div className="col-2   info footer-info2 ">
            <h4> {props.footer[1].customer_title}</h4>
            <ul className="footer-links ">
              {foot}
                
            </ul>
        </div>
        <div className="col-2  info footer-info3">
            <h4>    INFORMATION</h4>
            <ul className="footer-links">
               
              {foot1}
               
                
            </ul>
        </div>
        <div className="col-2  info footer-info4">
            <h4>NEWS</h4>
            <ul className="footer-links">
              
               {foot2}
              
                
            </ul>
        </div>
        <div className="col-3  info footer-info5">
            <h4>CONTACT INFORMATION</h4>
            <ul className="footer-links">
              
               
               {foot3}
              
                
            </ul>
        </div>
    </div>
    <br/> <br/>
    <div className="col text-center copy-of-footer">
<p>{props.copy[0].footer_copy}</p>
    </div>
</div>
  </div>
      
    )
};

export default Footer;