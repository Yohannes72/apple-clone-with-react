import React from "react";
import "./Components/style/style.css";
import "./Components/style/bootstrap.css";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";



// import Section1 from "./Components/Section1/section";
// import Section2 from "./Components/Section2/section";
// import Section3 from "./Components/Section3/section3";
// import Section4 from "./Components/Section4/section4";
// import Section5 from "./Components/Section5/section5";


import Main from "./Components/Main/main";
import Iphone from "./Components/Iphone/iphone";
import Music from "./Components/Music/music"
import { Routes, Route } from "react-router-dom"
import Four04 from "./Components/Four04/four04"




export default function App() {
    return ( <
        div >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Main / > }
        /> <
        Route path = "/iphone"
        element = { < Iphone / > }
        /> <
        Route path = "/Music"
        element = { < Music / > }
        /> <
        Route path = "*"
        element = { < Four04 / > }
        />  < /
        Routes >

        <
        Footer /
        >

        <
        /div>




    );
}