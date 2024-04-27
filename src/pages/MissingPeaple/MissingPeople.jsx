import React, { useState } from "react";
import "./missingPeople.css";
import CartList from "../../components/Card_list/CardList";
import Modal from "./../../components/Modal/Modal";

const MissingPeople = () => {
    return ( 
        <main>
            <div className="missingPer_list">
                <CartList />
            </div>
        </main>
     );
}
 
export default MissingPeople;