import React from 'react';
import './divider.css';

function Divider(){
    onscroll=(divider)=>{
        if(divider.scrollTop>100){
            divider.style.height="0px";
        }
    }
    return(
    <div className="divider">
        
    </div>
    )
}
export default Divider;