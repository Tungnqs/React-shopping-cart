import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  SEContainer,
  LeftContent,
  RightContent,
  OrderInfoContainer,
  OrderTitle,
  OrderSubtitle,
  OrderTotal,
  Paragraph,
  ButtonContainer,
  ContinueShoppingButton,
  ContainerCon,
  ParagraphLeft,
  ParagraphRight,
  StyledCheckoutButton
} from './CartItemsStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CartItem from './cartItem';
import { clearCart } from '../../../slices/cart';

const defaultApi = `http://localhost:4000`;

console.log('testing');
const CartItemsComponent: React.FC = () => {
  const navigate = useNavigate();

  const cart = useSelector((state: RootState) => state.cart.cart);

  const [st, setSt] = useState(0);
  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach(cartItem => {
      subtotal += cartItem.quantity * cartItem.product.price;
    });
    console.log(subtotal);
    setSt(Number(subtotal.toFixed(2)));
  };
  useEffect(() => {
    calculateSubtotal();
  }, [cart]);

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const calculateShippingCost = () => {
    const defaultShippingCost = 10;
    if (cart.length > 0) {
      return defaultShippingCost;
    }
    return 0;
  };

  const calculateTotal = (st: number) => {
    const shippingCost = calculateShippingCost();

    return (st + shippingCost).toFixed(2);
  };

  const CheckoutButton: React.FC = () => {
    const total = parseFloat(calculateTotal(st));
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();

    const payload = {
      paySuccess: true,
      productsInOrder: cart.map(cartItem => ({
        productId: cartItem.product.productId,
        quantity: cartItem.quantity
      }))
    };

    const handleCheckout = () => {
      axios
        .post(`${defaultApi}/api/checkout`, payload)
        .then(res => {
          const userConfirmation = window.confirm('Do you want to purchase?');
          if (userConfirmation) {
            alert('Thank you for Purchase!!!');
            dispatch(clearCart());
            console.log(payload);
          }
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };

    return (
      <StyledCheckoutButton disabled={total === 0} onClick={handleCheckout}>
        Checkout
      </StyledCheckoutButton>
    );
  };

  return (
    <Container>
      <ContainerCon>
        <Header>My Shopping Cart</Header>

        <SEContainer>
          <LeftContent>
            {cart.map(cartItem => (
              <CartItem
                key={cartItem.product.productId}
                cartItem={cartItem}
                decrement={() => {}}
                increment={() => {}}
              />
            ))}
            {cart.length === 0 && (
              <Paragraph>You have no products in the cart</Paragraph>
            )}
          </LeftContent>

          <RightContent>
            <OrderInfoContainer>
              <OrderTitle>Order Info</OrderTitle>
              <OrderSubtitle>
                <ParagraphLeft>Subtotal: </ParagraphLeft>
                <ParagraphRight>${st}</ParagraphRight>
              </OrderSubtitle>
              <OrderSubtitle>
                <ParagraphLeft>Shipping Cost:</ParagraphLeft>
                <ParagraphRight> ${calculateShippingCost()}</ParagraphRight>
              </OrderSubtitle>
              <OrderTotal>
                Total: <p>${calculateTotal(st)}</p>
              </OrderTotal>
            </OrderInfoContainer>

            <ButtonContainer>
              <CheckoutButton />

              <ContinueShoppingButton onClick={handleContinueShopping}>
                Continue Shopping
              </ContinueShoppingButton>
            </ButtonContainer>
          </RightContent>
        </SEContainer>
      </ContainerCon>
    </Container>
  );
};

export default CartItemsComponent;
