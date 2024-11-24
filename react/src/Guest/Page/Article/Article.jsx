import React from "react";

const Article = () => {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="feature-item">
              <img
                src="/img/feature-1.jpg"
                className="img-fluid rounded w-100"
                alt="Image"
              />
              <div className="feature-content p-4">
                <div className="feature-content-inner">
                  <h4 className="text-white">Best Pools</h4>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis porro soluta voluptatum laborum mollitia
                    blanditiis suscipit,
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fa fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
            <div className="feature-item">
              <img
                src="/img/feature-2.jpg"
                className="img-fluid rounded w-100"
                alt="Image"
              />
              <div className="feature-content p-4">
                <div className="feature-content-inner">
                  <h4 className="text-white">Waterslides</h4>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis porro soluta voluptatum laborum mollitia
                    blanditiis suscipit,
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fa fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
            <div className="feature-item">
              <img
                src="/img/feature-3.jpg"
                className="img-fluid rounded w-100"
                alt="Image"
              />
              <div className="feature-content p-4">
                <div className="feature-content-inner">
                  <h4 className="text-white">River Rides</h4>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis porro soluta voluptatum laborum mollitia
                    blanditiis suscipit,
                  </p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fa fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
