import { useState } from "react";
import React from "react";
import Contextor from "./context";

const States = ({children})  =>{
    const [contact,setContact]= useState(false);
    const value = {
        contact,setContact
    }
    return(
        <Contextor.Provider value={value}>
            {children}
        </Contextor.Provider>
    )
}
export default States;