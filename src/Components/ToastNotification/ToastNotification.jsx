import './Toast.css'
import React from 'react';

const ToastNotification=(props)=>{
    return(
        <div className={`toast visible${props.toast.disp}`}>
            <p className="center">{props.toast.txt}</p>
            <img src="https://cdn1.iconfinder.com/data/icons/flat-web-browser/100/close-512.png" alt="Cross" className="exit-img" onClick={props.exitfn}/>
        </div>
    )
}

export default ToastNotification;