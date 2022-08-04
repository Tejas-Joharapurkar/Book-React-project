import React from 'react'
import { useGlobalContext } from '../context';
import '../css/index.css'
import Book from './Book'
// import Modal from './Modal';
// import Alert from './Alert';
const BooksContainer = () => {
    const { list, alert, closealert } = useGlobalContext();
    return (
        <>
            {/* <Modal {...alert} />
            {alert.show && <Alert {...alert} closealert={closealert} list={list} />} */}
            <div className="book-container">
                {list.map((total) => {
                    return (
                        <Book key={total.id} {...total} />
                    )
                })}
            </div></>

    );
}

export default BooksContainer;