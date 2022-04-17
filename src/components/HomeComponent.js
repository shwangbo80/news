import React from "react"

import HeadlineComponent from "./HeadlineComponent"
import NewsComponent from "./NewsComponent"

export default function HomeComponent({apiData, dataFetched}) {
    return (
        <>
            <HeadlineComponent apiData={apiData} dataFetched={dataFetched} />
            <NewsComponent apiData={apiData} dataFetched={dataFetched} />
        </>
    )
}
