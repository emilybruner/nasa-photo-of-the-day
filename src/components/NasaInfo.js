import React, { useState, useEffect } from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaInfo() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=N9KrQxMynPqKPf0lW2yDx21rSQVSc7cGlfPRBSRO`)
            .then(response => {
                console.log("photo data", response.data);
                setPhoto(response.data);


            })
            .catch(error => {
                console.log("error: data not returned", error)
            })
    }, [])


    return (

        <div>
            return <NasaCard imgUrl={photo.url} title={photo.title} date={photo.date} explanation={photo.explanation} />
        </div>
    );
}


// return <NasaCard key={index} imgUrl={photo} title={photo.title} explanation={photo.explanation} />