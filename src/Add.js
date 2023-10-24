import React from "react";
import AddItem from "./AddItem";
import { useState } from "react";
import { Link } from "react-router-dom";

function Add() {
    console.log("Add component rendered");
    const [data, setData] = useState("")

    if (data) {
        return (
            <div>
            <p>{data.name} added!</p>
            <Link to="/">Go Home</Link>
            </div>
            )
    }
   
    return (
        <AddItem setData= {setData}/>
    )
    
}

export default Add;