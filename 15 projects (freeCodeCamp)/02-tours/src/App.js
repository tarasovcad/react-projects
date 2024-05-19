import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://6ff6dacd07851b41.mokky.dev/items';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url); // make an HTTP request to the API.
      const tours = await response.json(); // response from the API is converted to JSON format using
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <>
      <main>{loading ? <Loading /> : <Tours tours={tours} />}</main>
    </>
  );
}

export default App;
