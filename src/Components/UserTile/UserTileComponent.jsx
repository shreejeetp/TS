import React from "react";
import './UserTileStyle.css';

const UserTile= (props)=>{
    return(
        <div className="UserTile">
            <img alt="usrpic" src={`https://robohash.org/${props.user.id}?set=set2`}/>
            <h2>{props.user.name}</h2>
        </div>
    );
};
export default UserTile;