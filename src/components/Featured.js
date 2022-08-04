import React from 'react'
import { featured } from '../data';
import { useGlobalContext } from '../context';
const Featured = () => {
    const { index, setIndex, featurdebook } = useGlobalContext();
    return (
        <>
            <h2>
                featured books
            </h2>
            <section className='featured-section'>
                <div className="container">
                    {
                        featurdebook.map((total, bookIndex) => {
                            let position = 'nextSlide';
                            if (bookIndex === index) {
                                position = 'activeSlide';
                            }
                            if (
                                bookIndex === index - 1 ||
                                (index === 0 && bookIndex === featured.length - 1)
                            ) {
                                position = 'lastSlide';
                            }

                            return (

                                <article className={position} key={total.id}>
                                    <div className="featured-info">
                                        <h3 className="name">{total.name}</h3>
                                        <h4 className="title">{total.title}</h4>
                                    </div>
                                    <img src={total.img} alt="" className="featurde-img" />
                                </article>
                            )
                        })

                    }
                    <button className="btn-left" onClick={() => setIndex(index - 1)}>
                        <i class="arrow left"></i>
                    </button>
                    <button className="btn-right" onClick={() => setIndex(index + 1)}>
                        <i class="arrow right"></i>
                    </button>
                </div>

            </section>
        </>
    );
}

export default Featured;