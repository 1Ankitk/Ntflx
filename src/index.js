// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const fname = "Abcd";
// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://www.cricbuzz.com/";


// ReactDOM.render(
//   <>
//   <h1> {`My name is ${fname} and the current date is ${currdate}`}</h1>
//   <p contentEditable="true"> The current time is {currtime} </p>
//   <img src= {img1}/>
//   <img src= {img2}/>
//   <a href= {link} target='blank'>
//   <img src= {img3}/>
//   </a>
//   </>,
//   document.getElementById('root')
// );


// first project of react
// import react from "react";
// import ReactDOM from "react-dom";
// import './index.css'

// const currtime = new Date().getHours();
// let greeting = "";
// const currcss = {};
// if (currtime > 1 && currtime < 12) {
//   greeting = "Good Morning";
//   currcss.color = "green";
// } else if (currtime > 13 && currtime < 20){
//   greeting = "Good Afternoon";
//   currcss.color = "blue";
// }else{
//   greeting = "Good Night";
//   currcss.color = "black";
// }

// ReactDOM.render(<h1> Hello there,<span style={currcss}> {greeting} </span> </h1>,
// document.getElementById('root'));


import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
import Card from "./Cards";
import Rdata from "./Rdata";
import './index.css';

console.log(Rdata[0]);

ReactDOM.render(
  <>
  <h1 className="heading_style"> List of the Anime series on Netflix</h1>
  {Rdata.map((val,index) => {
    console.log(index)
  return (
    <Card
    sname={val.sname}
    imgsrc={val.imgsrc}
    title={val.title}
    link={val.link}/>
  );
})}
  </>,
  document.getElementById('root'));