import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
//import { Button, Divider, Image, Transition } from 'semantic-ui-react'

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=mUEdXXfN22zkTIhgfvZFiohXHVuaJsGDb6c4yizI")

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
    <Img src={data.url} alt ="content"></Img>
    <div>
    <h1>{data.title}</h1>
    <Paragraph>{data.date}</Paragraph>
    <Paragraph type = "information">{data.explanation}</Paragraph>
    </div>
    
  </div>
  )
}


export default Body;

//Styled Components

const Img = styled.img`
  width: 100%;
`;
const Paragraph = styled.p`
  margin: 0 160px;

  ${props => (props.type === "information" ? `
  margin: 30px
  `: null )}
`;


