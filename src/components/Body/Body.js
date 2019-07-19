import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Card, Icon } from 'semantic-ui-react'

//import { Button, Divider, Image, Transition } from 'semantic-ui-react'

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=mUEdXXfN22zkTIhgfvZFiohXHVuaJsGDb6c4yizI&date=2019-07-17")

      .then(response => {
        console.log("NASA:", response)
        //const info = response.data.title;
        setData(response.data);
      })

      .catch(error => {
        console.log("ERROR:", error);
      });


  }, []);

  return (<div>
    {/* STUDY THIS IF STATEMENTcan */}
    {data.media_type === 'image' ? <img src ={data.url}></img> : <iframe src = {data.url} controls></iframe>}
     {/* <Img src={data.url} alt="content"></Img>  */}
    {/* <iframe width="420" height="315"
      src={data.url}>
    </iframe> */}
    <div>
      <h1>{data.title}</h1>
      <Paragraph>{data.date}</Paragraph>
      <Paragraph type="information">{data.explanation}</Paragraph>
      {/* Card Working Need to finish using Semantic-UI-React */}
      {/* <SemanticCard header = "HOlA Como ESTAS"></SemanticCard>
      <Card image = '<img src ={data.title}/>'>

        image = <img src ={data.title}/>
      </Card> */}
    </div>

  </div>
  )
}


export default Body;

//Styled Components

const Img = styled.img`
  width: 100%;
  height:26rem;
`;
const Paragraph = styled.p`
  margin: 0 160px;

  ${props => (props.type === "information" ? `
  margin: 30px
  `: null)}
`;


