import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

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

    <h1>{data.title}</h1>
    <p>{data.date}</p>
    <img src={data.url} alt ="content"></img>
    <p type = "information">{data.explanation}</p>
  </div>)
}


export default Body;

//CSS


