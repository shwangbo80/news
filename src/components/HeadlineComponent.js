import {React, useEffect, useState} from "react"
import axios from "axios"
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

export default function HeadlineComponent() {
    const [apiData, setApiData] = useState([])
    const [apiKey, setApiKey] = useState("6CUv4iwsIM0GgE6ASqprhCkPkAcyXh9d")
    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            GetApiData("home")
        }, 5000)
    }, [])

    const GetApiData = (section) => {
        axios
            .get(
                `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
            )
            .then((response) => setApiData(response.data.results))
            .then(() => setDataFetched(true))
            .catch((error) => {
                console.log(error)
            })
    }
    const RenderApiData = () => {
        if (dataFetched) {
            return (
                <>
                    <Container className="mt-5">
                        <Row>
                            <Col md={6}>
                                <a href={apiData[0].url}>
                                    <h1 className="text-center ">
                                        {apiData[0].title}
                                    </h1>
                                    <Image
                                        fluid
                                        src={apiData[0].multimedia[0].url}
                                    />
                                    <h4>{apiData[0].abstract}</h4>
                                </a>
                            </Col>
                            <Col className="ps-5">
                                <a href={apiData[1].url}>
                                    <div>
                                        <h2>{apiData[1].title}</h2>
                                        <h6>{apiData[1].abstract}</h6>
                                    </div>
                                </a>
                                <hr />
                                <a href={apiData[2].url}>
                                    <div>
                                        <h4>{apiData[2].title}</h4>
                                        <h6>{apiData[2].abstract}</h6>
                                    </div>
                                </a>

                                <hr />
                                <a href={apiData[2].url}>
                                    <div>
                                        <h4>{apiData[3].title}</h4>
                                        <h6>{apiData[3].abstract}</h6>
                                    </div>
                                </a>
                                <hr />
                                <a href={apiData[2].url}>
                                    <div>
                                        <h4>{apiData[4].title}</h4>
                                        <h6>{apiData[4].abstract}</h6>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </>
            )
        } else {
            console.log("Data is fetching")
            return (
                <div className="loader-container pt-5">
                    <Spinner
                        animation="border"
                        role="status"
                        className="loader"
                        variant="info"></Spinner>
                </div>
            )
        }
    }
    return (
        <>
            <RenderApiData />
        </>
    )
}
