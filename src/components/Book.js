import React from 'react'
import '../css/index.css'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Modal from './Modal';
const Book = ({ id, title, img, price, author, }) => {
    const { addtocart, alert, modalcontent } = useGlobalContext();
    return (
        <>
            <Modal {...alert} {...modalcontent} />
            <article className='book'>
                <img src={img} alt={title} className="book-img img" />
                <div className="info">
                    <h3>{title}</h3>
                    <h4>By:{author}</h4>
                    <div className='price'>
                        <p>${price}</p>
                        <button className='addcart' onClick={() => addtocart(id)}>
                            <MdAddShoppingCart />
                        </button>

                        <Link to={`/book/${id}`} className='btn btn-primary'>
                            more
                        </Link>
                    </div>
                </div>
            </article>

        </>



    );
}

export default Book