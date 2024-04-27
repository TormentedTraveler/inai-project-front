import React, { useState } from "react";
import "./card.css";
import Modal from "./../Modal/Modal";

const Cart = (props) => {
    const [modalActive, setModalActive]= useState(false)

    return ( 
        <div className="home">
            <div className="card" onClick={() => setModalActive(true)}>
                <div className="per_image">
                    <img src={props.image} alt={props.name} />
                </div>
                <hr className="card-line"/>
                <div className="per_info">
                    <p className="per_name"><b>Name:</b> {props.name} {props.surname}</p>
                    <p className="per_dateOfBirth"><b>Date of birth:</b> {props.dateOfBirth}</p>
                    <p className="per_dateOfMissing"><b>Date of missing:</b> {props.dateOfMissing}</p>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="card-modal">
                    <div className="per_image-modal">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="per_info-modal">
                        <p className="per_name-modal"><b>Name:</b> {props.name} {props.surname}</p>
                        <p className="per_dateOfBirth-modal"><b>Date of birth:</b> {props.dateOfBirth}</p>
                        <p className="per_dateOfMissing-modal"><b>Date of missing:</b> {props.dateOfMissing}</p>
                        <p><b>Special Features:</b> {props.specialFeatures}</p>
                        <p><b>Clothes (at missing time): </b>{props.clothes}</p>
                    </div>
                </div>
            </Modal>
        </div>
     );
}
 
export default Cart;