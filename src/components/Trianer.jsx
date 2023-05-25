import React from "react";
import Card from "../UI/card";

const Trainer =({image,name,job,socials})=>{

    return (<Card className="trainer">

        <div className="trainers_image">
            <img src={image} alt={name}/>
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer_socials">
            {
                socials.map(({icon,link},index)=>{
                    return <a href={link} key={index} rel="noopener noeffer">{icon}</a>

                })
            }
            
        </div>

    </Card>
    )

}


export default Trainer;