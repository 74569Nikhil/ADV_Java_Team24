import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../CSS/Navigationbar.css';


export function Navigationbar() {
    return (
        <Navbar bg="custom" variant="dark" className="navbar-custom" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="brand-effect fancy-font">BACK-TO-SCHOOL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/subscription">
                            <Nav.Link>Subscription</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/Courses">
                            <NavDropdown title="Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#c" className="dropdown-item">
                                    C
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#cpp" className="dropdown-item">
                                    C++
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#html" className="dropdown-item">
                                    HTML
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#css" className="dropdown-item">
                                    CSS
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#javascript" className="dropdown-item">
                                    JavaScript
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#java" className="dropdown-item">
                                    Java
                                </NavDropdown.Item>
                            </NavDropdown>
                        </LinkContainer>
                        
                        


                        <LinkContainer to="/AboutUs">
                        <Nav.Link>AboutUs</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contactus">
                            <Nav.Link>ContactUs</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/AboutUs">
                        
                            <Nav.Link className="nav-link search-bar">
                                <div className="d-flex align-items-center">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className="search-input"
                                    />
                                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                </div>
                            </Nav.Link>
                        </LinkContainer>

                       


                    </Nav>

                    <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link className="nav-link cart-link">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                {" "}Cart
                            </Nav.Link>
                        </LinkContainer>

                        <Button variant="primary" size="sm" value="LogOut">LogOut</Button>
                    </Nav>


                    <NavDropdown title={<FontAwesomeIcon icon={faUser} size="lg" color="white" />} id="profile-dropdown">
                    <LinkContainer to="/log-in">
                      <NavDropdown.Item>Log In</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/sign-up">
                      <NavDropdown.Item>Sign Up</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin-log-in">
                      <NavDropdown.Item>Admin</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}