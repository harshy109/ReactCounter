// import { Component } from "react"
// import React,{Component} from "react"
import React from "react";
class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            na:"myCar",
            color : "pink"
        };
    }
    render(){
        return(
            <>
            <h1>Car is {this.state.color}</h1>
            </>
        )
    }
}
export default Car;