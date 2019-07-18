import React, { useEffect, useState } from "react";
import axios from "axios";

function Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://henry-mock-nasa-api.herokuapp.com/api")

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

  </div>)
}


export default Body;