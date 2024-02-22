import React, { useState, useEffect, useRef } from 'react';
import {
  ProductDetailContainer,
  Action,
  PriceAndAdd,
  QuantityButton,
  TotalPrice
} from './ProductDetailComponent.styled';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { addToCart } from '../../../slices/cart';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProductData {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ProductDetailProps {
  product: IProductData;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const prevProduct = useRef<IProductData | null>(null);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (
      prevProduct.current &&
      product.productId !== prevProduct.current.productId
    ) {
      setCount(1);
      setTotalPrice(product.price);
    }
    prevProduct.current = product;
  }, [product]);

  useEffect(() => {
    setTotalPrice(product.price * count);
  }, [count, product]);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: count }));
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <ProductDetailContainer>
      <img src={product.imageUrl} alt="Product" />
      <h4>{product.productName}</h4>
      <p>{product.description}</p>
      <Action>
        <QuantityButton>
          <button onClick={decrement} disabled={count === 1}>
            -
          </button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </QuantityButton>

        <PriceAndAdd>
          <TotalPrice>
            <span>Total Price:</span>${totalPrice.toFixed(2)}
          </TotalPrice>
          <button onClick={handleAddToCart}>
            <i className="bi bi-cart"></i> <span>Add to cart</span>
          </button>
        </PriceAndAdd>
      </Action>

      {showSuccessMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: 4,
            right: 10,
            background: 'rgb(112, 186, 99)',
            padding: 8,
            color: 'white',
            borderRadius: 10,
            fontSize: 12
          }}
        >
          You add <strong>{count}</strong> of{' '}
          <strong>{product.productName}</strong> to the cart successfully{' '}
          <i className="bi bi-fire"></i> 😎
        </div>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
