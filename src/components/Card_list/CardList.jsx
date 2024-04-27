import React from "react";
import "./cardList.css";
import Cart from "../Card/Card";
import {peaple} from "../../helpers/DataBace"

const CartList = () => {

    return ( 
        <div className="cartList">
            {peaple.map((person) => {
                return <Cart key={person.id} name={person.name} surname={person.surname} image={person.image} dateOfBirth={person.dateOfBirth} dateOfMissing={person.dateOfMissing} specialFeatures={person.specialFeatures} clothes={person.clothes} />;
            })}
        </div>
     );
}
 
export default CartList;