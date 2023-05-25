import React from "react";
import Image from "../images/values.jpg"
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/card";


const Values = () => {
    return (
        <section className="values">
            <div className="container values_container">
                <div className="values_left">
                    <img src={Image} alt="values_image" />

                </div>

                <div className="values_right">
                    <SectionHead icon={<GiCutDiamond/>} title="Values" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique alias vitae, cum tempore aut.</p>

                    <div className="values_wrapper">
                        {
                            values.map(({ id, icon, title, desc })=>{
                            return <Card className="values_value" key={id}>
                                 <span>{icon}</span>
                                 <h4>{title}</h4>
                                 <small>{desc}</small>
                            </Card>
                           

                            })

                        }

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Values;