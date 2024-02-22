import styled from 'styled-components';
const tabletBreakpoint = '768px';

export const CartItemP = styled.div`
  margin-bottom: 20px; /* Adjust the value as needed for the desired spacing */
`;

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2%;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const CartItemName = styled.b``;

export const CartItemDescription = styled.p``;

export const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartItemDeleteButton = styled.p`
  color: red;
  cursor: pointer;
`;

export const CartItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const TotalPrice = styled.p`
  font-weight: bold;
  @media (max-width: 1000px) {
    margin-top: 24px;
  }
`;

export const QuantityButton = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 5px;
    cursor: pointer;
    background-color: #e5e7eb;
    border: 1px solid #ccc;
    color: white;
  }
`;

export const Input = styled.input`
  text-align: center;
  width: 40px;
  pointer-events: none;
  background-color: #e5e7eb;
  border: none;
  color: black;
`;

export const CartItemRight = styled.div`
  width: 80%;
  @media (max-width: 1300px) {
    width: 100%;
    margin-top: 24px;
  }
`;

export const CartItemImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 100%;
  height: auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CartItemImage = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
