import { styled, keyframes } from 'styled-components';

export const MainBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e6e7eb;
`;

export const MainContent = styled.div`
  margin-top: 15px;
  width: 85%;
  display: flex;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductDetail = styled.div`
  width: 59%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const rotate = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const Spinner = styled.div`
  animation: ${rotate} 1s infinite linear;
  transform-origin: 100px 100px;
`;

export const Circle = styled.div`
  position: absolute;
`;

export const FirstCircle = styled(Circle)`
  width: 164px;
  height: 164px;
  border: 24px solid;
  border-radius: 50%;
  border-color: transparent #93dbe9 #93dbe9 #93dbe9;
  box-sizing: border-box;
  transform: rotate(45deg);
  transform-origin: 100px 100px;

  transform: rotate(45deg) translate(18px, 18px);
`;

export const SecondCircle = styled(Circle)`
  width: 164px;
  height: 164px;
  border: 24px solid;
  border-radius: 50%;
  border-color: transparent #93dbe9 #93dbe9 #93dbe9;
  box-sizing: border-box;
  transform: rotate(0deg);
  transform-origin: 100px 100px;

  transform: rotate(0deg) translate(18px, 18px);
`;

export const ThirdCircle = styled(Circle)`
  width: 0;
  height: 0;
  border: 24px solid;
  border-color: transparent transparent transparent #93dbe9;
  transform: translate(100px, 6px);
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  place-items: center;
`;
