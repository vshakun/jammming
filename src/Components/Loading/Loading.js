import React from "react";
//import FadeIn from "react-fade-in";
//import Lottie from "react-lottie";
import ReactLoading from "react-loading";
//import "bootstrap/dist/css/bootstrap.css";

export class Loading extends React.Component {
    render(){
       return(
          <div>
              <ReactLoading type={"bars"} color={"white"} />
          </div>
       )
    }
 }