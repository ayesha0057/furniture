import React from "react";

const Nav=(props)=>{
    let linkz=props.nav[0].nav_links.map((v,i)=>{
        return(
          <li class="nav-item l1" key={i}>
          <a class="nav-link logo" href="#">{v.link}</a>
        </li>
        )
    })
       
         console.log(props.nav)
            return(
        
        <div>
            <div className="container">
                <div className="row">
              <div className="col col-lg-12 col-md-2">
              <nav class="navbar navbar-expand-lg coloor">
         
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav colorlib">
             
             {linkz}
            </ul>
            
            <a class="navbar-brand logo" href="#" > <img src={props.nav[0].nav_logo} alt=""/></a>
            <i className="fa fa-shopping-cart"> </i>
            <li class="nav-item l2"> my account</li>
            <li class="nav-item l2"> my  cart</li>
          </div>
        </nav>  <br/>
              </div>

              
                </div>
            </div>
        </div>

    )
};
export default Nav;