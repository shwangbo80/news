import React from "react"
import {
    Navbar,
    Container,
    Nav,
    Button,
    Form,
    FormControl,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap"
export default function NavbarComponent() {
    return (
        <>
            <Navbar bg="success" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Search</Button>
                    </Form>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    Search
                                </Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand href="/">News</Navbar.Brand>
                            <Nav.Link href="/world">World</Nav.Link>
                            <Nav.Link href="/us">U.S</Nav.Link>
                            <Nav.Link href="/politics">Politics</Nav.Link>
                            <Nav.Link href="/newyork">N.Y</Nav.Link>
                            <Nav.Link href="/business">Business</Nav.Link>
                            <Nav.Link href="/opinion">Opinion</Nav.Link>
                            <Nav.Link href="/tech">Tech</Nav.Link>
                            <Nav.Link href="/science">Science</Nav.Link>
                            <Nav.Link href="/sports">Sports</Nav.Link>
                            <Nav.Link href="/arts">Arts</Nav.Link>
                            <Nav.Link href="/books">Books</Nav.Link>
                            <Nav.Link href="/style">Style</Nav.Link>
                            <Nav.Link href="/food">Food</Nav.Link>
                            <Nav.Link href="/travel">Travel</Nav.Link>
                            <Nav.Link href="/magazine">Magazine</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
