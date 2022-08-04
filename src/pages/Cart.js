import React from 'react'
import { useGlobalContext } from '../context';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
const Cart = () => {
    const { cart, totalCost, increase, decrease, clearcart, remove, alert, closealert } = useGlobalContext();
    return (
        <>
            {alert.show && <Alert {...alert} cart={cart} closealert={closealert} />}
            <div className="cart-container">
                <h2>your cart list</h2>
                {cart.map((total) => {
                    const { img, title, amount, id, price, } = total
                    return (
                        <div className="one-book-cart" key={id}>
                            <Link to={`/book/${id}`}>
                                <img src={img} alt="" className="book-img-modal img" />
                            </Link>
                            <div className="cart-info">
                                <h4>{title}</h4>
                                <p>Price:{price}</p>
                                <p>Quntity:{amount}</p>
                                <button className="remove" onClick={() => remove(id)}>
                                    remove book
                                </button>
                            </div>
                            <div className="button">
                                <button className="increase" onClick={() => increase(id)}>
                                    <GrAddCircle />
                                </button>
                                <h4>{amount}</h4>
                                <button className="decrease" onClick={() => decrease(id)}>
                                    <AiOutlineMinusCircle />
                                </button>
                            </div>
                        </div>
                    )
                })}
                <div className="total">
                    total cost
                    <h4>
                        {totalCost}$
                    </h4>
                </div>
                {cart.length > 0 ? <button className="clear-cart" onClick={clearcart}>
                    clear cart
                </button> : null}
            </div >
        </>
    );
}

export default Cart