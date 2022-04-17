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
                <Col md="3" className="py-4 px-0 mx-0" key={index}>
                    <a href={item.url}>
                        <div className="px-3">
                            <h6 className="text-success">{item.section}</h6>
                            <h5>{item.title}</h5>
                            <h6>{item.abstract}</h6>
                        </div>
                    </a>
                </Col>
            ))
    }
    const RenderApiData = () => {
        if (dataFetched) {
            return (
                <div className="mt-5">
                    <Container>
                        <hr />
                        <h5 className="pt-2">More News</h5>
                        <Row>
                            <MapData />
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return (
                <>
                    {/* <div className="loader-container pt-5">
                        <Spinner
                            animation="border"
                            role="status"
                            className="loader"
                            variant="info"></Spinner>
                    </div> */}
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
