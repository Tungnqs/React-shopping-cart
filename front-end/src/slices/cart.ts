import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ICartItem {
  product: IProductData;
  quantity: number;
}

interface ICart {
  cart: ICartItem[];
}

const initialState: ICart = {
  cart: []
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const newCartItem = action.payload;

      const currentCartItemIndex = state.cart.findIndex(
        cartItem => cartItem.product.productId === newCartItem.product.productId
      );

      if (currentCartItemIndex === -1) {
        state.cart.push(newCartItem);
      } else {
        state.cart[currentCartItemIndex].quantity += newCartItem.quantity;
      }
    },

    changeProductQuantity: (state, action: PayloadAction<ICartItem>) => {
      const cartItem = action.payload;

      const index = state.cart.findIndex(
        i => i.product.productId === cartItem.product.productId
      );

      state.cart[index].quantity = cartItem.quantity;
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        cartItem => cartItem.product.productId !== action.payload
      );
    },

    clearCart: state => {
      state.cart = [];
    }
  }
});

export const { addToCart, removeFromCart, changeProductQuantity } =
  CartSlice.actions;
export const { clearCart } = CartSlice.actions;
export default CartSlice;
