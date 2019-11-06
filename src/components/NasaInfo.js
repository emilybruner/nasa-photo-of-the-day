import React, { useState, useEffect } from "react";
// import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaInfo() {
    const [title, setTitle] = useState([]);
    const [date, setDate] = useState([]);
    const [url, setUrl] = useState([]);
    const [explanation, setExplanation] = useState([]);


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=N9KrQxMynPqKPf0lW2yDx21rSQVSc7cGlfPRBSRO`)
            .then(response => {
                console.log("title data", response.data);
                setTitle(response.data.title);
                setUrl(response.data.url);
                setDate(response.data.date);
                setExplanation(response.data.explanation);
            })
            .catch(error => {
                console.log("error: data not returned", error)
            })
    }, [])

    return (

        <div className="container">
            {NasaInfo.map((photo, index) => {
                return <NasaCard key={index} url={photo} title={title} date={date} explanation={explanation} />
            })}
        </div>
    );
}
