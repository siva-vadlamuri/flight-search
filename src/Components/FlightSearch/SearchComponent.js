import React, {useState} from "react";
import "./index.css";

function SearchComponent({obj})
{
    const renderOnCondition = ()=>{
        if(obj == null)
            return
        if(obj.length == 0){
            return((
                <div data-testid="no-flights">
                    No flights found
                </div>
            ))
        }else{
            return((
                <table>
                    {console.log(obj)}
                    <thead>
                        <tr>
                            <th>DEPARTURE</th>
                            <th>DURATION</th>
                            <th>ARRIVAL</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody data-testid="flights">
                    {
                        obj.map((flight)=>((
                            <tr key={flight.id}>
                                <td>{flight.takeoff_timestamp}</td>
                                <td>{flight.duration}</td>
                                <td>{flight.landing_timestamp}</td>
                                <td>{flight.flight_ticket_price}</td>
                            </tr>
                        
                        )))
                    }
                    </tbody>
                </table>
            ))
        }
        
    }
    return(
        <div>
        {
            // console.log(obj)
            renderOnCondition()
        }
        </div>
    )
}

export default SearchComponent