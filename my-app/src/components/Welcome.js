import React from "react";
import cat from "../images/cat.jpg";

export default function Welcome(props) {
  //image =Hello, firstName, lastName
  return (
    <img src={cat} alt="welcomeCat" height="200" />
    <div>Hello!</div>
    <div>
        <span>{props.firstName}</span>
        {props.lastName}
    </div>
  );
}
