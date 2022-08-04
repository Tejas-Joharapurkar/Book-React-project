import React, { useContext, useEffect, useReducer, useState } from 'react'
import { books } from './data';
import reducer from './reducer'
import { featured } from './data';

const Appcontext = React.createContext();

const initialstate = {
    list: books,
    cart: [],
    totalamount: 0,
    totalCost: 0,
    showlinks: false,
    alert: { show: false, msg: '', type: '' },
    showmodal: false,
    modalcontent: { price: null, title: '', amount: null, img: '' },
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialstate)
    const [index, setIndex] = useState(0);
    const [featurdebook, setfeaturdebook] = useState(featured)
    useEffect(() => {
        const lastIndex = featurdebook.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, featurdebook]);
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);



    const toggleLinks = () => {
        dispatch({ type: 'SHOW-LINKS' })
    };
    const addtocart = (id) => {

        const check = state.cart.find((item) => item.id === id)
        if (check) {
            dispatch({ type: 'ALREDY-CART', id: id })
        } else {
            dispatch({ type: 'ADD-CART', id: id })
        }
    }
    const closealert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }
    const closemodal = () => {
        dispatch({ type: 'CLOSE-MODAL' })
    }
    const increase = (id) => {
        dispatch({ type: 'INCREASE', id: id })
    }
    const decrease = (id) => {
        dispatch({ type: 'DECREASE', id: id })
    }
    const remove = (id) => {
        dispatch({ type: 'REMOVE', id: id })
    }
    const clearcart = (id) => {
        dispatch({ type: 'CLEAR-CART', id: id })
    }
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
        // console.log(state.cart);
    }, [state.cart])

    return (
        <Appcontext.Provider value={{
            toggleLinks,
            ...state,
            addtocart,
            closealert,
            closemodal,
            increase,
            decrease,
            remove,
            clearcart,
            index,
            setIndex,
            featurdebook,
            setfeaturdebook,

        }}>{children}</Appcontext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(Appcontext);
}
export { AppProvider, Appcontext }


















    // const [showLinks, setShowLinks] = useState(false);

