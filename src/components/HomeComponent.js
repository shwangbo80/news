import React from "react"

import HeadlineComponent from "./HeadlineComponent"
import NewsCompnent from "./NewsCompnent"

export default function HomeComponent({apiData, dataFetched}) {
    return (
        <>
            <HeadlineComponent apiData={apiData} dataFetched={dataFetched} />
            <hr />
            <NewsCompnent apiData={apiData} dataFetched={dataFetched} />
            <hr />
        </>
    )
}
