
import FlightSearch from "./FlightSearch";
const SearchResults = (props) => {
  const {data}=props
      return (
          <table >
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
  