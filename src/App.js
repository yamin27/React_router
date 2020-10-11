import React from 'react';
import logo from './logo.svg';
import './App.css';
import './My.scss'
// import CountryList from "./CountryList";
import Post from "./Post";

function App() {

  // const TextStyle = {
  //
  //   backgroundColor: "green",
  //   color: "red",
  //   padding: "30px",
  //   margin: "40px",
  // }

  return (
    <div className="App">
      {/*<h1 className="TextStyle">Yamin Alam Sarker</h1>*/}
      {/*<CountryList></CountryList>*/}
      <Post></Post>
    </div>
  );
}

export default App;
