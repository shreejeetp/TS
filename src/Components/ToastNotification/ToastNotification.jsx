import './Toast.css'
import React from 'react';

const ToastNotification=(props)=>{
    return(
        <p className={`toast center visible${props.toast.disp}`}>{props.toast.txt}</p>
    )
}

export default ToastNotification;