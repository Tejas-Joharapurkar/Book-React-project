import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md'
import { books } from '../data';
import { useGlobalContext } from '../context';
import Modal from '../components/Modal';
const SingleBook = () => {
    const { addtocart, alert, modalcontent } = useGlobalContext();
    const { id } = useParams();
    const singleitem = books.find((item) => item.id === parseInt(id));
    const { img, title, info, price, author } = singleitem;
    return (
        <>
            <Modal {...alert} {...modalcontent} />
            <div className="single-book-container">
                <img src={img} alt={title} className="img singlebook" />
                <div className="single-info">
                    <h3>{title}</h3>
                    <h4>{author}</h4>
                    <p>{info}</p>
                    <p>{price}</p>
                </div>
                <div>
                    <Link to='/books' className='btn btn-primary'>
                        back
                    </Link>
                    <button className='addcart' onClick={() => addtocart(parseInt(id))}>
                        <MdAddShoppingCart />
                    </button>
                </div>

            </div>
        </>
    );
}

export default SingleBook;