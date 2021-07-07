import React from "react"
import "./smallHeader.css";

const SmallHeader=(props)=>{
    return(
        <div className="smallHeaderBlock">
            <h3 className="center">{props.header_text}</h3>
        </div>
    )
}

export default SmallHeader;