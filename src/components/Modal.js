import React from 'react';
// import { FaTimes } from '../../../node_modules/react-icons/fa'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom';
const Modal = ({ msg, title, img, price, amount }) => {
    const { showmodal, closemodal } = useGlobalContext();

    return (
        <div className={`${showmodal ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className="modal-container">
                <h3>{msg}</h3>
                <div className="modal-info">
                    <img src={img} alt="" className="book-img-modal img" />
                    <article>
                        <h4>{title}</h4>
                        <p>Price:{price}$</p>
                        <p>Quntity:{amount}</p>
                    </article>
                </div>
                <Link to='/' onClick={closemodal} className='btn btn-primary'>
                    continue shopping
                </Link>
                <Link to='/cart' className='btn btn-primary' onClick={closemodal}>
                    go to cart
                </Link>
            </div>
        </div>
    )
}
export default Modal;