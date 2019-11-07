import React from "react";


const NasaCard = props => {
    return (

        <div className="nasa-card">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img className="nasa-image" alt="nasa pic of the day" src={props.imgUrl} />
            <p>{props.explanation}</p>
        </div>
    );
};

export default NasaCard;
