import React, { useState, useEffect } from "react";
import './App.css';

// https://api.github.com/users/derekbelloni

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData);
  }, [])

  if (data) {
    console.log(data)
    return (<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
    </div>)
  }

  return <div>No User Available</div>

  return (
    <div>

    </div>

  )
}







export default App;
