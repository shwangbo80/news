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

import NewsComponent from "./NewsComponent"
import RenderApiData from "./RenderApiData"

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

    return (
        <>
            <RenderApiData apiData={apiData} dataFetched={dataFetched} />
            <NewsComponent apiData={apiData} dataFetched={dataFetched} />
        </>
    )
}
