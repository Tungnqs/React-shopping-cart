import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeProductQuantity, removeFromCart } from '../../../slices/cart';
import { QuantityButton } from '../../ProductPage/ProductDetailComponent/ProductDetailComponent.styled';
import {
  CartItemsContainer,
  CartItemImage,
  CartItemName,
  CartItemDescription,
  CartItemHeader,
  CartItemDeleteButton,
  CartItemBottom,
  TotalPrice,
  Input,
  CartItemImageContainer,
  CartItemRight,
  CartItemP
} from './CartItem.styled';

interface CartItemProps {
  cartItem: {
    quantity: number;
    product: {
      productId: string;
      imageUrl: string;
      productName: string;
      description: string;
      price: number;
    };
  };
  decrement: (id: string) => void;
  increment: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  decrement,
  increment
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(cartItem.quantity);

  useEffect(() => {
    dispatch(changeProductQuantity({ ...cartItem, quantity: count }));
  }, [count, cartItem, dispatch]);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      decrement(cartItem.product.productId);
    } else {
      // Display confirmation dialog
      const confirmed = window.confirm(
        'This product will be removed from your cart. Are you sure?'
      );
      if (confirmed) {
        dispatch(removeFromCart(cartItem.product.productId));
      }
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
    increment(cartItem.product.productId);
  };

  const handleRemove = () => {
    dispatch(removeFromCart(cartItem.product.productId));
  };

  // Calculate total price
  const totalPrice = (count * cartItem.product.price).toFixed(2);

  return (
    <CartItemP>
      <CartItemsContainer>
        <CartItemImageContainer>
          <CartItemImage src={cartItem.product.imageUrl} alt="qq" />
        </CartItemImageContainer>

        <CartItemRight>
          <CartItemHeader>
            <CartItemName>{cartItem.product.productName}</CartItemName>
            <CartItemDeleteButton onClick={handleRemove}>
              <i className="bi bi-trash"></i>
            </CartItemDeleteButton>
          </CartItemHeader>
          <CartItemDescription>
            {cartItem.product.description}
          </CartItemDescription>
          <CartItemBottom>
            {/* Quantity buttons */}
            <QuantityButton>
              <button onClick={handleDecrement}>-</button>
              <Input type="number" value={count} readOnly />
              <button onClick={handleIncrement}>+</button>
            </QuantityButton>

            {/* Total price */}
            <TotalPrice>${totalPrice}</TotalPrice>
          </CartItemBottom>
        </CartItemRight>
      </CartItemsContainer>
    </CartItemP>
  );
};

export default CartItem;
