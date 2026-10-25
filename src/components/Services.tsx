import React from "react";
import { services } from "../data/services";

const Services: React.FC = () => {
  return (
    <>
      {/* Services Section Start */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="section-tag">What I Do</span>
          <h2 className="heading">
            My <span>Services</span>
          </h2>
        </div>
        <div className="services-container">
          {services.map((service) => (
            <div className="service-content" key={service.id}>
              <div className="service-header">
                <div className="service-icon" title={service.title}>
                  <i className={service.iconClass}></i>
                </div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Services Section End */}
    </>
  );
};

export default Services;
