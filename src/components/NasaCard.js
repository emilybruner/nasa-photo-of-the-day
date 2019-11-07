import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 5%;
padding: 2%;
`
const PhotoCard = styled.div`
background: black;
color: white;
display: flex;
flex-direction: column;
align-items: center;
max-width: 1000px;
`;

const CardH1 = styled.h1`
font-size: 2rem;
color: orange;
`;

const CardP = styled.p`
max-width: 600px;
font-size: 1.2rem;
`;
const CardImg = styled.img`

`

const NasaCard = props => {
    return (
        <CardContainer>
            <PhotoCard>

                <CardImg className="nasa-image" alt="nasa pic of the day" src={props.imgUrl} />
                <h2>{props.date}</h2>
                <CardH1>{props.title}</CardH1>
                <CardP>{props.explanation}</CardP>
            </PhotoCard>
        </CardContainer>
    );
};

export default NasaCard;
