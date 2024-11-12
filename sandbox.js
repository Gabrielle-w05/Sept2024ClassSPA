// USING QUERY STRING WRITE A GET REQUEST FOR A ROUTE OF WEATHER/:CITY AND ACCEPT A UNIT AS A QUERY STRING AND ACCEPTS UNIT AS A QUERY STRING AND RESPONSE WITH WEATHER AND CITY. 
// CITY WILL BE DYNAMIC AND THE UNIT WILL BE DYNAMIC ALSO 
// BONUS : ADD A DEFAULT TO THE UNIT. PROVIDE FALLBACK FOR UNIT

import { response } from "express";

app.get("weather/:city", (request, response) => {

    const city = request.params.city;

    let unit = request.query.unit || "sunny";

    if (request.query.unit) {
       let unit =  request.query.unit
    } else {let unit = "sunny"};




    response.send(`The weather in ${city} is ${unit}.`);
} 
