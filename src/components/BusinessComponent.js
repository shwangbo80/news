import React from "react"
import {useEffect, useState} from "react"
import axios from "axios"

import RenderApiData from "./RenderApiData"

export default function BusinessComponent() {
    const [apiData, setApiData] = useState([])
    const [apiKey, setApiKey] = useState("6CUv4iwsIM0GgE6ASqprhCkPkAcyXh9d")
    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        GetApiData("business")
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
        </>
    )
}