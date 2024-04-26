import React from "react";
import "./cart.css";

const Cart = (props) => {
    return ( 
        <div className="home">
            <div className="cart">
                <div className="per_image">
                    <img src={props.image} alt={props.name} />
                </div>
                <hr className="cart-line"/>
                <div className="per_info">
                    <p className="per_name"><b>Name:</b> {props.name} {props.surname}</p>
                    <p className="per_dateOfBirth"><b>Date of birth:</b> {props.dateOfBirth}</p>
                    <p className="per_dateOfMissing"><b>DAte of missing:</b> {props.dateOfMissing}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;