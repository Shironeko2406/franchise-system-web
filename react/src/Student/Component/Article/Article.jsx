import React from "react";

const features = [
  {
    id: 1,
    imgSrc: "/img/feature-1.jpg",
    title: "Lập Trình Web",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro soluta voluptatum laborum mollitia blanditiis suscipit.",
    delay: "0.2s",
  },
  {
    id: 2,
    imgSrc: "/img/feature-2.jpg",
    title: "Lập Trình Game",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro soluta voluptatum laborum mollitia blanditiis suscipit.",
    delay: "0.4s",
  },
  {
    id: 3,
    imgSrc: "/img/feature-3.jpg",
    title: "Lập Trình Di Động",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro soluta voluptatum laborum mollitia blanditiis suscipit.",
    delay: "0.6s",
  },
];

const Article = () => {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="col-lg-4 wow fadeInUp"
              data-wow-delay={feature.delay}
            >
              <div className="feature-item">
                <img
                  src={feature.imgSrc}
                  className="img-fluid rounded w-100"
                  alt={feature.title}
                />
                <div className="feature-content p-4">
                  <div className="feature-content-inner">
                    <h4 className="text-white">{feature.title}</h4>
                    <p className="text-white">{feature.description}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
