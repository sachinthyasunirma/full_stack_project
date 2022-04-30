import React from "react";

export const NextArrow = (props) =>{
    return(
        <div onClick={props.onClick} className={props.className} style={{...props.style, backgroundColor: "rgb(142,142,142)", borderRadius:"50%"}}></div>
    )
}

export const PrevArrow = (props) =>{
    return(
        <div onClick={props.onClick} className={props.className} style={{...props.style, backgroundColor: "rgb(142,142,142)", borderRadius:"50%"}}></div>
    )
}

