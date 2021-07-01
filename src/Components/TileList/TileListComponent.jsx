import React from "react";
import { UserTile } from "../UserTile/UserTileComponent";
import './TileListStyle.css';

export const TileList=(props)=>{
    return(
        <div className='GridList'>
            {props.users.map(user=>(
                <UserTile user={user}/>
            ))}
        </div>
    );
};