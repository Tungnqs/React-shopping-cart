import styled from 'styled-components';
export const ProductDetailContainer = styled.div`
  width: 100%;
  padding: 12px;
  background-color: white;
  img {
    width: 100%;
  }
  h4 {
    font-weight: bold;
    margin-top: 48px;
  }
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Action = styled.div`
  width: 100%;
  display: flex;
  margin: 36px 0;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin: 0 48px;
  }
`;
export const PriceAndAdd = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    border-radius: 8px;
    background-color: blue;
    color: white;
    width: 180px;
    height: 36px;
    @media (max-width: 1024px) {
      width: 180px;
      background-color: white;
    }
    span {
      @media (max-width: 760px) {
        display: none;
      }
    }
  }
  i {
    margin-right: 12px;
    @media (max-width: 1024px) {
      margin-right: 0;
      color: #0c06f7;
      font-size: 20px;
      font-weight: 800;
    }
  }
  p {
    font-weight: bold;
    margin: 0;
    margin-right: 12px;
  }
  span {
    @media (max-width: 1080px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    justify-content: flex-start;
    width: 50%;
  }
`;
export const QuantityButton = styled.div`
  width: 100px;
  height: 36px;
  background-color: #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 36px;
    height: 36px;
    border: none;
    color: #ff7300;
    background-color: #e5e7eb;
    border-radius: 8px;
  }
  span {
    color: balck;
  }
`;
export const TotalPrice = styled.h5`
  margin: 0;
  display: flex;
  align-items: center;
  padding-right: 10px;
  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
