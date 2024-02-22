import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import * as S from './Header.styled';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './HeaderStyle.css';

const HeaderComponent: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalQuantity = cart.length;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" data-bs-theme="light" style={{ padding: '0' }}>
      <Container>
        <Nav id="side-bar-menu">
          <Button variant="primary" onClick={handleShow} id="navbar-menu-btn">
            <i className="fa-solid fa-bars"></i>
          </Button>

          <Offcanvas
            id="side-bar-menu-container"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <h1>Menu</h1>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavLink to="/home">
                <h2>Home</h2>
              </NavLink>
              <NavLink to="/products">
                <h2>Products</h2>
              </NavLink>
              <NavLink to="/review">
                <h2>Review</h2>
              </NavLink>
            </Offcanvas.Body>
          </Offcanvas>
        </Nav>
        <Nav id="navbar-left">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-decoration-none ${
                isActive ? 'text-black fw-bold' : '#87898c'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-decoration-none ${
                isActive ? 'text-black fw-bold' : '#87898c'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/review"
            className={({ isActive }) =>
              `text-decoration-none ${
                isActive ? 'text-black fw-bold' : '#87898c'
              }`
            }
          >
            Review
          </NavLink>
        </Nav>
        <Navbar.Brand as={Link} to={'/home'}>
          <S.NavbarLogo>Beauty.bd</S.NavbarLogo>
        </Navbar.Brand>
        <NavLink to="/cart">
          <S.GreenCartIcon>
            <input readOnly={true} value={totalQuantity} />
            <i className="bi bi-cart"></i>
          </S.GreenCartIcon>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
