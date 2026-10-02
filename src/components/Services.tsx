import React from "react";
import { services } from "../data/services";

const Services: React.FC = () => {
  return (
    <>
      {/* Services Section Start */}
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
          <span
            className="animate scroll"
            style={{ "--i": 0.5 } as React.CSSProperties}
          ></span>
        </h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-content" key={service.id}>
              <div className="service-header">
                <div className="service-icon" title={service.title}>
                  <i className={service.iconClass}></i>
                </div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <span
                className="animate scroll"
                style={{ "--i": 1 + index * 0.5 } as React.CSSProperties}
              ></span>
            </div>
          ))}
        </div>
      </section>
      {/* Services Section End */}
    </>
  );
};

export default Services;
