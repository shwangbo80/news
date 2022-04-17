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
            <Navbar bg="light" variant="light" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <a href="/searchresult">
                            <Button variant="light">Search</Button>
                        </a>
                    </Form>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                News Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Navbar.Brand href="/">Home</Navbar.Brand>
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
                            </Nav>
                            <Form className="d-flex my-4">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <a href="./searchresult">
                                    <Button variant="outline-success">
                                        Search
                                    </Button>
                                </a>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-light" href="/">
                                Home
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/world">
                                World
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/us">
                                U.S
                            </Nav.Link>
                            <Nav.Link
                                className="text-light px-2"
                                href="/politics">
                                Politics
                            </Nav.Link>
                            <Nav.Link
                                className="text-light px-2"
                                href="/newyork">
                                N.Y
                            </Nav.Link>
                            <Nav.Link
                                className="text-light px-2"
                                href="/business">
                                Business
                            </Nav.Link>
                            <Nav.Link
                                className="text-light px-2"
                                href="/opinion">
                                Opinion
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/tech">
                                Tech
                            </Nav.Link>
                            <Nav.Link
                                className="text-light px-2"
                                href="/science">
                                Science
                            </Nav.Link>
                            <Nav.Link
                                className="text-light px-2"
                                href="/sports">
                                Sports
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/arts">
                                Arts
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/books">
                                Books
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/style">
                                Style
                            </Nav.Link>
                            <Nav.Link className="text-light px-2" href="/food">
                                Food
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
