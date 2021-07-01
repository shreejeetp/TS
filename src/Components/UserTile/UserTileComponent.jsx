import React from "react";
import './UserTileStyle.css';

export const UserTile = (props)=>{
    return(
        <div className="UserTile">
            <img alt="usrpic" src={`https://robohash.org/${props.user.id}?set=set3`}/>
            <h2>{props.user.name}</h2>
        </div>
    );
};