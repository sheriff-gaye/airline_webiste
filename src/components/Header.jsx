import React from "react";


const Header=({title,image,children})=>{
    return(
        <header className="header">
            <div className="container header_container">
                <div className="header_container-bg">
                    <img src={image} alt="header_image"/>
                    
                </div>
                <div className="header_content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
                
            </div>
            
        </header>
    )
}


export default Header