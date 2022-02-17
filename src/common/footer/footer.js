import React from "react"
import "./footer.css"

function Footer(){
    return(
        <div class="navbar">
            <a href="#home" class="active"><i className="fa fa-home"></i></a>
            <a href="#inventory">
            <i class="fa-solid fa-building"></i></a>
            <a href="#cart"> <i class="fa-solid fa-cart-arrow-down"></i></a>
            <a href="#profile"><i class="fa-solid fa-user"></i> </a>
</div>
    );
}
export default Footer;