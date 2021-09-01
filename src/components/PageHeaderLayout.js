/* eslint-disable arrow-body-style */
import React from 'react';
// import { Link } from 'react-router-dom';
import { Icon, Nav, Navbar } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const PageHeaderLayout = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Header className="navbar-brand">ShoppingHUB</Navbar.Header>
        <Navbar.Body>
          <Nav>
            {/* <Link to="/"> */}
            <Nav.Item href="/" eventKey="1" icon={<Icon icon="home" />}>
              Home
            </Nav.Item>
            {/* </Link> */}
          </Nav>
          <Nav pullRight>
            <Nav.Item
              style={{ width: '250px', textAlign: 'center' }}
              href="/ShoppingCard/addtocard"
              icon={<Icon icon="shopping-cart" />}
            >
              Your wishlist
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
      <div style={{ textAlign: 'center', margin: '30px' }}>
        <h1>
          <b>Shopping HUB</b>
        </h1>
        <p>Search everything whatever you want</p>
      </div>
    </div>
  );
};

export default PageHeaderLayout;
