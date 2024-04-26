import React from "react";
import "./cartList.css";
import Cart from "../cart/Cart";
import {peaple} from "./../../helpers/DataBace"

const CartList = () => {
    return ( 
        <div className="cartList">
            {peaple.map((person) => {
                return <Cart key={person.id} name={person.name} surname={person.surname} image={person.image} dateOfBirth={person.dateOfBirth} dateOfMissing={person.dateOfMissing} />;
            })}
        </div>
     );
}
 
export default CartList;