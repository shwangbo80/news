import {React, useEffect, useState} from "react"
import axios from "axios"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavbarComponent from "./NavbarComponent"

import HomeComponent from "./HomeComponent"
import WorldComponent from "./WorldComponent"
import UsComponent from "./UsComponent"
import PoliticsComponent from "./PoliticsComponent"
import NyComponent from "./NyComponent"
import BusinessComponent from "./BusinessComponent"
import OpinionComponent from "./OpinionComponent"
import TechComponent from "./TechComponent"
import ScienceComponent from "./ScienceComponent"
import SportsComponent from "./SportsComponent"
import ArtsComponent from "./ArtsComponent"
import BooksComponent from "./BooksComponent"
import StyleComponent from "./StyleComponent"
import FoodComponent from "./FoodComponent"
import TravelComponent from "./TravelComponent"
import MagazineComponent from "./MagazineComponent"

export default function MainComponent() {
    const [apiData, setApiData] = useState([])
    const [apiKey, setApiKey] = useState("6CUv4iwsIM0GgE6ASqprhCkPkAcyXh9d")
    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        GetApiData("home")
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
        <div>
            <NavbarComponent />
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomeComponent
                                apiData={apiData}
                                dataFetched={dataFetched}
                            />
                        }
                    />
                    <Route path="/world" element={<WorldComponent />} />
                    <Route path="/us" element={<UsComponent />} />
                    <Route path="/politics" element={<PoliticsComponent />} />
                    <Route path="/newyork" element={<NyComponent />} />
                    <Route path="/business" element={<BusinessComponent />} />
                    <Route path="/opinion" element={<OpinionComponent />} />
                    <Route path="/tech" element={<TechComponent />} />
                    <Route path="/science" element={<ScienceComponent />} />
                    <Route path="/sports" element={<SportsComponent />} />
                    <Route path="/arts" element={<ArtsComponent />} />
                    <Route path="/books" element={<BooksComponent />} />
                    <Route path="/style" element={<StyleComponent />} />
                    <Route path="/food" element={<FoodComponent />} />
                    <Route path="/travel" element={<TravelComponent />} />
                    <Route path="/magazine" element={<MagazineComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
