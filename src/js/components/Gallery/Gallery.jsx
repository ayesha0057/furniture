import React from "react";
const Gallery=(props)=>{
    console.log(props.gallery)
    return(

        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="image1" >
                        <img src={props.gallery[0].img1} alt=""/>
                    <div class="category_details">
    

    <h2 class="category-title">
       bathroom		
    </h2>        
</div>
                </div>
                </div>
                <div className="col-3">
                    <div className="image1" >
                        <img src={props.gallery[0].img4} alt=""/>
                    <div class="category_details">
    

    <h2 class="category-title">
       		shower
    </h2>        
</div>
                </div>
                </div>
                <div className="col-3">
                    <div className="image1" >
                        <img src={props.gallery[0].img2} alt=""/>
                    <div class="category_details">
    

    <h2 class="category-title">
        chairs			
    </h2>        
</div>
                </div>
                </div>
                <div className="col-3">
                    <div className="image1" >
                        <img src={props.gallery[0].img3} alt=""/>
                    <div class="category_details">
    

    <h2 class="category-title">
    couch		
    </h2>        
</div>
                </div>
                </div>
                
                </div> 




        </div>
    )
};
export default Gallery;