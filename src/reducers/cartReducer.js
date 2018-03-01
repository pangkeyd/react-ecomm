const initialState = {
  cart: [],
  itemCart: [],
  totalPrice: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const findIdx = state.cart.findIndex(function(item) {
        return item.id === action.payload.item.id
      })

      if (findIdx === -1) {
        action.payload.item.qty = 1
        action.payload.item.total_price = action.payload.item.price * action.payload.item.qty
      } else {
        state.cart[findIdx].qty += 1
        state.cart.map(r => {
          if (r.id === action.payload.item.id) {
            r.total_price = r.price * r.qty
          }
        })
      }

      let dummyCart = (findIdx === -1) ? state.cart.concat(action.payload.item) : state.cart;
      let grandtotal = 0;
      dummyCart.map(r => {
        grandtotal += r.total_price
      })

      return {
        ...state,
        cart: dummyCart,
        itemCart: state.itemCart.concat(action.payload.item),
        totalPrice: grandtotal
      }
    case 'REMOVE_FROM_CART':
      let res = 0

      state.cart.map(item => {
        res += item.total_price
        if (item.id === action.payload.id) {
          res -= item.total_price
        }
      })

      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        itemCart: state.itemCart.filter(item => item.id !== action.payload.id),
        totalPrice: res
      }
    default:
      return state
  }
}

export default reducer