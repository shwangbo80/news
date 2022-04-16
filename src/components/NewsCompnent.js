import {toBeInTheDOM} from "@testing-library/jest-dom/dist/matchers"
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
    Row,
    Col,
    Image,
    Spinner,
} from "react-bootstrap"

export default function NewsComponent({dataFetched, apiData}) {
    const MapData = () => {
        return apiData
            .filter((item) => apiData.indexOf(item) > 4)
            .map((item, index) => (
                <Col md="3" className="py-3" key={index}>
                    <a href={item.url}>
                        <h6 className="text-success">{item.section}</h6>
                        <h5>{item.title}</h5>
                        <h6>{item.abstract}</h6>
                    </a>
                </Col>
            ))
    }
    const RenderApiData = () => {
        if (dataFetched) {
            return (
                <>
                    <Container className="mt-5">
                        <h5>News</h5>
                        <Row>
                            <MapData />
                        </Row>
                    </Container>
                </>
            )
        } else {
            console.log("Data is fetching")
            return (
                <>
                    <Spinner
                        animation="border"
                        role="status"
                        className="loader"
                        variant="info"></Spinner>
                </>
            )
        }
    }
    return (
        <>
            <RenderApiData />
        </>
    )
}
