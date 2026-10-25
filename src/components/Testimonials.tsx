import React from "react";
import { testimonials } from "../data/testimonials";

const Testimonials: React.FC = () => {
  // Duplicate list to achieve a seamless, continuous infinite float loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      {/* Testimonials Section Start */}
      <section className="testimonials" id="testimonials">
        <div className="section-header">
          <h2 className="heading">
            Client <span>Reviews</span>
          </h2>
        </div>

        {/* Floating Moving Marquee Stream */}
        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee-track">
            {duplicatedTestimonials.map((item, index) => (
              <div
                className="testimonial-floating-card"
                key={`${item.id}-${index}`}
                style={
                  {
                    "--float-delay": `${(index % 4) * 0.8}s`,
                  } as React.CSSProperties
                }
              >
                <div className="testimonial-header">
                  <div className="client-avatar">
                    {item.client.charAt(0)}
                  </div>
                  <div className="client-info">
                    <h4>{item.client}</h4>
                    <span className="client-role">{item.role}</span>
                  </div>
                </div>

                <div className="testimonial-meta">
                  <div className="star-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <i className="bx bxs-star" key={i}></i>
                    ))}
                  </div>
                  <span className="project-badge">{item.projectType}</span>
                </div>

                <blockquote className="testimonial-body">
                  "{item.content}"
                </blockquote>

                <div className="testimonial-footer">
                  <span className="client-country">
                    <i className="bx bx-globe"></i> {item.country}
                  </span>
                  <span className="verified-badge">
                    <i className="bx bxs-badge-check"></i> Verified Delivery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section End */}
    </>
  );
};

export default Testimonials;
