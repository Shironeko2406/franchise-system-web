import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos mollitia fugiat, nihil autem reprehenderit aperiam maxime minima consequatur, nam iste eius velit perferendis voluptatem at atque neque soluta reiciendis doloremque.",
    name: "Person Name 1",
    profession: "Profession 1",
    imageSrc: "/img/testimonial-1.jpg",
    stars: 5
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos mollitia fugiat, nihil autem reprehenderit aperiam maxime minima consequatur, nam iste eius velit perferendis voluptatem at atque neque soluta reiciendis doloremque.",
    name: "Person Name 2",
    profession: "Profession 2",
    imageSrc: "/img/testimonial-2.jpg",
    stars: 4
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos mollitia fugiat, nihil autem reprehenderit aperiam maxime minima consequatur, nam iste eius velit perferendis voluptatem at atque neque soluta reiciendis doloremque.",
    name: "Person Name 3",
    profession: "Profession 3",
    imageSrc: "/img/testimonial-3.jpg",
    stars: 5
  }
];

const TopFeedback = () => {
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Testimonials</h4>
          <h1 className="display-5 text-white mb-4">Our Clients Reviews</h1>
          <p className="text-white mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item p-4">
              <p className="text-white fs-4 mb-4">
                {testimonial.quote}
              </p>
              <div className="testimonial-inner">
                <div className="testimonial-img">
                  <img
                    src={testimonial.imageSrc}
                    className="img-fluid"
                    alt="Testimonial"
                  />
                  <div className="testimonial-quote btn-lg-square rounded-circle">
                    <i className="fa fa-quote-right fa-2x" />
                  </div>
                </div>
                <div className="ms-4">
                  <h4>{testimonial.name}</h4>
                  <p className="text-start text-white">{testimonial.profession}</p>
                  <div className="d-flex text-primary">
                    {Array.from({ length: testimonial.stars }, (_, i) => (
                      <i key={i} className={`fas fa-star ${i < testimonial.stars ? "text-primary" : "text-white"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopFeedback;
