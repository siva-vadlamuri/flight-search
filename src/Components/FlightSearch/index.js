import React, {useState} from "react";
import "./index.css";
import SearchComponent from "./SearchComponent"



function FlightSearch ({flightsData}) {
    
    const [search, setSearch] = useState({
        sourceInput : "",
        destinationInput : ""
    })
    
    const [tableData, setTableData] = useState(null);
    
    const handleOnChange = (event) =>{
        const {name,value} = event.target;
        setSearch({...search,[name]:value});
    }
    
    const handleOnClick = (event) =>{
        event.preventDefault();
        const data = flightsData.filter((flight)=>(
          flight.departure_from == search.sourceInput && flight.arrival_at == search.destinationInput 
        ));
        setTableData(data);

    }
    
    
    
    return(
        <div>
            <h1>Flight Search</h1>
            <div className="col-6">
                <form>
                    <input 
                    type="text" 
                    name="sourceInput"
                    className ="form-control"
                    value = {search.sourceInput}
                    onChange={handleOnChange}/>
                    <input 
                    type="text" 
                    name="destinationInput"
                    className ="form-control"
                    value = {search.destinationInput}
                    onChange={handleOnChange}/>
                    <button className="btn btn-primary" onClick={handleOnClick}>
                    Search
                    </button>
                </form>
            </div>
            <div>
                <SearchComponent obj={tableData} />
            </div>
            
        </div>
    )

}





export default FlightSearch;