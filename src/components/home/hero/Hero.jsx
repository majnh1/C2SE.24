import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME"
              title="The best place to find documents and answer questions"
            />

            <div className="button">
              <button className="primary-btn">
                UPLOAD FILE NOW<i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW SOUCE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
