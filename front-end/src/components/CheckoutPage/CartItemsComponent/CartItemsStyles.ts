import styled from 'styled-components';
const mobileBreakpoint = '768px';
export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #e5e7eb;
  min-height: 100vh;
`;
export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
  }
`;
export const StyledCheckoutButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: not-allowed;
`;
export const SEContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  @media (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
  }
`;
export const LeftContent = styled.div`
  flex: 1;
  @media (min-width: ${mobileBreakpoint}) {
    flex: 3;
  }
`;
export const RightContent = styled.div`
  flex: 1;
  padding-left: 20px;
  background: #e5e7eb;
  @media (max-width: ${mobileBreakpoint}) {
    padding-top: 20px;
    padding-left: 0px;
  }
`;
export const Paragraph = styled.p`
  background: #fff;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
`;
export const ParagraphLeft = styled.p`
  color: gray;
`;
export const ParagraphRight = styled.p`
  color: black;
`;
export const ParagraphTotal = styled.p`
  display: flex;
  justify-content: flex-start;
`;
export const OrderInfoContainer = styled.div`
  background: #fff;
  border-radius: 5px;
`;
export const OrderTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-weight: bold;
`;
export const OrderSubtitle = styled.h5`
  font-size: 16px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;
export const OrderTotal = styled.h3`
  font-size: 24px;
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
`;
export const CheckoutButton = styled(Button)`
  background-color: #3b82f6;
  color: white;
  border: none;
`;
export const ContinueShoppingButton = styled(Button)`
  background-color: #e5e7eb;
  border: 2px solid #3b82f6;
  color: #3b82f6;
`;
export const ContainerCon = styled.div`
  padding: 0 10px 20px 10px;
  @media (min-width: ${mobileBreakpoint}) {
    padding: 0 200px 20px 200px;
  }
`;
