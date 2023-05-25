import React from "react";
import Image from "../../images/header_bg_4.jpg";
import Header from "../../components/Header";
import Card from "../../UI/card";
import { plans } from "../../data";
import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={Image}>
        Discover our diverse range of gym membership plans tailored to fit your
        fitness goals. With expert trainers, state-of-the-art equipment, and a
        welcoming environment, we have everything you need to achieve success.
      </Header>

      <section className="plan">
        <div className="container plans_container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/Month</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}

                <button className="btn lgs">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
