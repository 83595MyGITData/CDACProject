import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [journeyDate, setJourneyDate] = useState('');
  const navigate = useNavigate();

  const onSearch = () => {
    if (origin.length === 0) {
      toast.error("Enter origin");
    } else if (destination.length === 0) {
      toast.error("Enter destination");
    } else if (journeyDate.length === 0) {
      toast.error("Enter journey date");
    } else {
      toast.success("Searching for buses...");
      // Redirect or perform the search action
      navigate(`/search-results?origin=${origin}&destination=${destination}&journeyDate=${journeyDate}`);
    }
  };

  return (
    <div>
      <h1 className="page-header">Bus Ticket Booking</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col mb-3">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="origin" className="">Origin</label>
              <input
                onChange={(e) => setOrigin(e.target.value)}
                type="text"
                className="form-control"
                id="origin"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="">Destination</label>
              <input
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                className="form-control"
                id="destination"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="journeyDate" className="">Journey Date</label>
              <input
                onChange={(e) => setJourneyDate(e.target.value)}
                type="date"
                className="form-control"
                id="journeyDate"
              />
            </div>
            <div className="mb-3">
              <button onClick={onSearch} className="btn btn-success mb-3">Search Buses</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home;
