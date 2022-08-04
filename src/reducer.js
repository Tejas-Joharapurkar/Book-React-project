const reducer = (state, action) => {
    if (action.type === 'SHOW-LINKS') {
        return {
            ...state, showlinks: !state.showlinks,
        }
    }
    if (action.type === 'ADD-CART') {
        let cartlist = state.list.find((item) => item.id === action.id);
        cartlist = { ...cartlist, amount: 0 }
        cartlist.amount = cartlist.amount + 1;
        return { ...state, cart: [...state.cart, { ...cartlist, incart: true, }], showmodal: true, alert: { ...state.alert, msg: 'item added to cart' }, modalcontent: { price: cartlist.price, title: cartlist.title, img: cartlist.img, amount: cartlist.amount } }
    }
    if (action.type === 'ALREDY-CART') {
        let cartlist = state.cart.find((item) => item.id === action.id);
        return { ...state, alert: { ...state.alert, msg: 'alredy in cart' }, showmodal: true, modalcontent: { price: cartlist.price, title: cartlist.title, img: cartlist.img, amount: cartlist.amount } }
    }
    if (action.type === 'CLOSE_ALERT') {
        return {
            ...state,
            alert: { show: false, msg: '', type: '' },
        }
    }
    if (action.type === 'CLOSE-MODAL') {
        return {
            ...state, showmodal: false,
        }
    }
    if (action.type === 'GET_TOTALS') {
        let { amount, total } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0,
            }
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, totalamount: amount, totalCost: total }
    }
    if (action.type === 'CLEAR-CART') {
        return {
            ...state, cart: [], alert: { show: true, msg: 'item removed', type: 'danger' }
        }
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.id) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.id) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state, cart: state.cart.filter((item) => item.id !== action.id), alert: { show: true, msg: 'item removed', type: 'danger' }
        }
    }
}

export default reducer