import React, {useState, useEffect}  from "react";
import FlightSearch from "./Components/FlightSearch";
import axios from "axios";

function App() {
    
    const [flightData, setFlightData] = useState([{}]);
    
    const getTheData = async ()=>{
        const {data} = await axios.get("https://jsonmock.doselect.com/api/domestic_flights/domestic_flights");
        setFlightData(data);
        console.log(data);
    }
    
    useEffect(()=>{
        getTheData();
    },[]);
    
    return(
        <div>
            <FlightSearch flightsData={flightData} />
        </div>
    );
    
}



export default App;
