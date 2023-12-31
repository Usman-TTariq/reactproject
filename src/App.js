import React from "react";
import Article from "./component/article/Article"
import Brand from "./component/brand/Brand"
import Cta from "./component/cta/Cta"
import Feature from "./component/feature/Feature"
import Navbar from "./component/navbar/Navbar"

import Blog from "./Container/blog/Blog";
import Features from "./Container/features/Features";
import Header from "./Container/header/Header";
import Footer from "./Container/footer/Footer";
import Possibilities from "./Container/possibilities/Possibilities";
import WhatGPT3 from "./Container/whatGPT3/WhatGPT3";

import "./App.css"

export default function App(){
    return(
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibilities/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
    )
}