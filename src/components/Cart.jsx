import React from "react";
import "./cart.css";

const Cart = (props) => {
    return ( 
        <div className="cart">
            <div className="per_image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="per_info">
                <p className="per_name">{props.name} {props.surname}</p>
                <p className="per_dateOfBirth">{props.dateOfBirth}</p>
                <p className="per_dateOfMissing">{props.dateOfMissing}</p>
            </div>
        </div>
     );
}
 
export default Cart;