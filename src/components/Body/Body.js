import React, {useEffect, useState } from  "react";
import axios from "axios";

function Body() {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        
        .then(response => {
            console.log("NASA:", response)
            const info = response.data.title;
            setData(info);
        })

        .catch(error => {
          console.log("ERROR:", error);
        });


    },);
  
    return <div>
        {data}
    </div>;
  }


export default Body;