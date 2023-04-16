
import FlightSearch from "./FlightSearch";
// import {fetchData} from "./FlightSearch"
// console.log(fetchData())
// let data=fetchData()
// console.log(data)
const SearchResults = (props) => {
  const {data}=props
      return (
          <table >
            {/* add columnsheadings */}
            <thead>
              <tr>
                <th>DEPARTURE</th>
                <th>DURATION</th>
                <th>ARRIVAL</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody data-testid="flight-results">{
              data.map((elm)=>{
                return <>
                <tr>
                  <td>{elm.departure}</td>
                  <td>{elm.duration}</td>
                  <td>{elm.arrival}</td>
                  <td>{elm.price}</td>
                </tr>
                </>
              })
            }</tbody>
          </table>
      );
    
  };
  export default SearchResults;
  