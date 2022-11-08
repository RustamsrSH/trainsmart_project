import React from 'react';
import "./Modal.scss"

const Modal = ({ hide, data }) => {
    console.log(data);
    return (
        <div className='modal' onClick={hide}>
            <div className='modal_container'>
                <div onClick={hide} className="close">X</div>
                <img className='img_modal' src={data.image} alt="personage" />
                <h2>{data.name}</h2>
            </div>
        </div>
    );
};

export default Modal;