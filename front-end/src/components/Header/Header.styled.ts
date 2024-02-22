import { styled } from 'styled-components'

export const NavbarLogo = styled.p`
  font-weight: bold;
  color: #467edc;
  margin: 0;
`

export const GreenCartIcon = styled.div`
  font-size: 30px;
  color: #467edc;
  position: relative;
  display: inline-block;

  input {
    top: 5px;
    text-align: center;
    position: absolute;
    right: -4px;
    background-color: red;
    color: white;
    border-radius: 100%;
    font-size: 10px;
    width: 15px;
    height: 15px;
    outline: none;
    border: none;
  }
`
