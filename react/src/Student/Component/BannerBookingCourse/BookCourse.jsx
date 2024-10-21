import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { CreateConsultFranchiseActionAsync } from "../../../Redux/ReducerAPI/ConsultationsReducer";

const carouselData = [
  {
    imgSrc: "/img/carousel-1.jpg",
    title: "Chào mừng học viên",
    heading: "Tham gia học ngay",
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy...`,
    buttonText: "Tư vấn ngay",
    formType: "register", // Form đăng ký
  },
  {
    imgSrc: "/img/carousel-2.jpg",
    title: "Chào mừng học viên",
    heading: "Tham gia học ngay",
    description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy...`,
    buttonText: "Đăng kí khóa học",
    formType: "consult", // Form tư vấn
  },
];

const BookCourse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const handleNextSlide = () => {
    const nextIndex = (currentIndex + 1) % carouselData.length;
    setCurrentIndex(nextIndex);
  };

  const formBookCourse = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      guest: "",
      date: "",
      package: "",
    },
    onSubmit: (values, { resetForm }) => {
      const formattedDate = moment(values.date).format(
        "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
      );
      const valuesSend = { ...values, date: formattedDate };
      console.log("Register Form:", valuesSend);
      resetForm();
    },
  });

  const formConsult = useFormik({
    initialValues: {
      customerName: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(CreateConsultFranchiseActionAsync(values))
        .then((response) => {
          if (response) {
            resetForm();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <Carousel
      activeIndex={currentIndex}
      onSelect={setCurrentIndex}
      interval={null}
    >
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={item.imgSrc}
            className="img-fluid w-100"
            alt={`Slide ${index + 1}`}
          />
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
                    <p className="mb-4 fs-5">{item.description}</p>
                    <div className="d-flex flex-shrink-0">
                      <button
                        className="btn btn-primary rounded-pill text-white py-3 px-5"
                        onClick={handleNextSlide}
                      >
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-xl-5">
                  <div className="ticket-form p-5">
                    <h2 className="text-dark text-uppercase mb-4">
                      {item.formType === "register"
                        ? "Đăng Kí khóa học"
                        : "Tư Vấn Ngay"}
                    </h2>
                    <form
                      onSubmit={
                        item.formType === "register"
                          ? formBookCourse.handleSubmit
                          : formConsult.handleSubmit
                      }
                    >
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control border-0 py-2"
                            id={
                              item.formType === "register"
                                ? "name"
                                : "customerName"
                            }
                            placeholder="Your Name"
                            onChange={
                              item.formType === "register"
                                ? formBookCourse.handleChange
                                : formConsult.handleChange
                            }
                            value={
                              item.formType === "register"
                                ? formBookCourse.values.name
                                : formConsult.values.customerName
                            }
                          />
                        </div>

                        {item.formType === "register" && (
                          <>
                            <div className="col-12 col-xl-6">
                              <input
                                type="email"
                                className="form-control border-0 py-2"
                                id="email"
                                placeholder="Your Email"
                                onChange={formBookCourse.handleChange}
                                value={formBookCourse.values.email}
                              />
                            </div>
                            <div className="col-12 col-xl-6">
                              <input
                                type="text"
                                className="form-control border-0 py-2"
                                id="phone"
                                placeholder="Phone"
                                onChange={formBookCourse.handleChange}
                                value={formBookCourse.values.phone}
                              />
                            </div>
                            <div className="col-12">
                              <select
                                className="form-select border-0 py-2"
                                aria-label="Default select example"
                                id="package"
                                onChange={formBookCourse.handleChange}
                                value={formBookCourse.values.package}
                              >
                                <option value="" disabled>
                                  Select Packages
                                </option>
                                <option value="1">Family Packages</option>
                                <option value="2">Basic Packages</option>
                                <option value="3">Premium Packages</option>
                              </select>
                            </div>
                            <div className="col-12">
                              <input
                                className="form-control border-0 py-2"
                                type="date"
                                id="date"
                                onChange={formBookCourse.handleChange}
                                value={formBookCourse.values.date}
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="number"
                                className="form-control border-0 py-2"
                                id="guest"
                                placeholder="Guest"
                                onChange={formBookCourse.handleChange}
                                value={formBookCourse.values.guest}
                              />
                            </div>
                          </>
                        )}

                        {item.formType === "consult" && (
                          <>
                            <div className="col-12 col-xl-6">
                              <input
                                type="email"
                                className="form-control border-0 py-2"
                                id="email"
                                placeholder="Your Email"
                                onChange={formConsult.handleChange}
                                value={formConsult.values.email}
                              />
                            </div>
                            <div className="col-12 col-xl-6">
                              <input
                                type="text"
                                className="form-control border-0 py-2"
                                id="phoneNumber"
                                placeholder="Your Phone"
                                onChange={formConsult.handleChange}
                                value={formConsult.values.phoneNumber}
                              />
                            </div>
                          </>
                        )}

                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary w-100 py-2 px-5"
                          >
                            {item.formType === "register" ? "Đăng Kí" : "Nộp"}
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
