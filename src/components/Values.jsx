import React from "react";
import Image from "../images/12.png";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/card";

const Values = () => {
  return (
    <section className="values" id="about">
      <div className="container values_container">
        <div className="values_left">
          <img src={Image} alt="values_image" />
        </div>

        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="Why Choose Us" />
          <p>
            At Sunny Travels, we pride ourselves on providing unparalleled
            travel experiences that bring warmth, joy, and comfort to your
            journey. Our commitment to excellence shines through our exceptional
            customer service, seamless booking process, and a diverse range of
            destinations. Embark on a journey filled with sunshine and
            adventure, as we make your travel dreams come true. Choose us and
            let the sun guide you to your next unforgettable destination. Bon
            voyage!
          </p>

          <div className="values_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values_value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
