import React, {Component} from "react";
import data from "./data";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import Product from "./Product/Product";
import Arrivals from "./Arrivals/Arrivals";
import Footer from "./Footer/Footer";
class  Home extends Component{
    state={
        data: data
      }
      render(){
        return(
            <div>
          <Nav nav={this.state.data[0].nav}/>
        <Header header={this.state.data[0].header}/>
        <Gallery gallery={this.state.data[0].gallery}/>
        <Product  products={this.state.data[0].products}/>
        <Arrivals new_product={this.state.data[0].new_product}/>
        <Footer footer={ this.state.data[0].main_footer} copy={this.state.data[0].footer_details}/>
            </div>
                )
      }
};
export default  Home;