import React from "react";
import "./bg.css"
let user={
    firstname:"Joyia"
};

function show(name1) {
    return name1;
}
const name="Ao na khushboo laga kar"
const El=<h1 className="bg">Hello jee, ao na phasain {60+9}, {name}, {show("Abdul")},{user.firstname} </h1>

export default El;