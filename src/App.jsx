// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from './Heading';
// import Para from "./Para";
// import List from './List';

// function App() {
//     return (<>
//         <Heading/>
//         <Para/> 
//         <List/>
//     </>);
// }
// export default App;


import React from "react";
function App(props){
    console.log(props);
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="myPic" className="card_img" />
                <div className="card_info">
                    <span className="card_category">{props.title}</span>
                    <h3 className="card_title"> {props.sname} </h3>
                    <a href={props.link} target="blank">
                        <button> Watch Now</button>
                    </a>
                </div>
            </div>

        </div>
        </>
    );
}

export default App;
