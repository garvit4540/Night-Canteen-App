import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const NavBar=()=>{

    const dispatch = useDispatch()
    const cartState = useSelector(state=>state.cartReducer);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Image
                        src="images/logo.jpeg"
                        alt="logo"
                        style={{ height: "100px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
};

export default NavBar;