import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Content from "./Content";
import Counter from "./Counter";
import "./Counter.css";
function Home(props){
    return(
        <>
        <Nav></Nav>
        <Content car={props.brand.model}></Content>
        <h1 id="">This is {props.brand.car}. It is {props.brand.old} years old.</h1>
        <h2 id="">I also have an {props.bike} bike</h2>
        <h1>Table of 2 : {props.array}</h1>
        <Counter></Counter>
        <Footer></Footer>
        </>
    )
}
export default Home;