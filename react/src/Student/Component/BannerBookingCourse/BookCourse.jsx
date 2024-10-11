import React from 'react';
import { Carousel } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

const carouselData = [
  {
    imgSrc: '/img/carousel-1.jpg',
    title: 'Chào mừng học viên',
    heading: 'Tham gia học ngay',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy...`,
    buttonText: 'Tư vấn ngay',
  },
  {
    imgSrc: '/img/carousel-2.jpg',
    title: 'Chào mừng học viên',
    heading: 'Tham gia học ngay',
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy...`,
    buttonText: 'Tư vấn ngay',
  },
];

const BookCourse = () => {
  return (
    <Carousel>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <img src={item.imgSrc} className="img-fluid w-100" alt={`Slide ${index + 1}`} />
          <Carousel.Caption>
            <div className="container py-4">
              <div className="row g-5 align-items-center">
                <div className="col-xl-7">
                  <div className="text-start">
                    <h4 className="text-primary text-uppercase fw-bold mb-4">
                      {item.title}
                    </h4>
                    <h1 className="display-4 text-uppercase text-white mb-4">
                      {item.heading}
                    </h1>
                    <p className="mb-4 fs-5">
                      {item.description}
                    </p>
                    <div className="d-flex flex-shrink-0">
                      <NavLink
                        className="btn btn-primary rounded-pill text-white py-3 px-5"
                        to="/consult"
                      >
                        {item.buttonText}
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="ticket-form p-5">
                    <h2 className="text-dark text-uppercase mb-4">
                      Đăng Kí khóa học
                    </h2>
                    <form>
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control border-0 py-2"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-12 col-xl-6">
                          <input
                            type="email"
                            className="form-control border-0 py-2"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="col-12 col-xl-6">
                          <input
                            type="phone"
                            className="form-control border-0 py-2"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-12">
                          <select
                            className="form-select border-0 py-2"
                            aria-label="Default select example"
                          >
                            <option selected>Select Packages</option>
                            <option value={1}>Family Packages</option>
                            <option value={2}>Basic Packages</option>
                            <option value={3}>Premium Packages</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <input
                            className="form-control border-0 py-2"
                            type="date"
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="number"
                            className="form-control border-0 py-2"
                            id="number"
                            placeholder="Guest"
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn-primary w-100 py-2 px-5"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BookCourse;
