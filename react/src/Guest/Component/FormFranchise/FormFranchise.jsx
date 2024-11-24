import React, { useEffect } from "react";
import "./FormFranchise.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { CreateConsultFranchiseActionAsync } from "../../../Redux/ReducerAPI/ConsultationsReducer";

const FormFranchise = () => {
  const dispatch = useDispatch();

  const formFranchiseConsult = useFormik({
    initialValues: {
      customerName: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: (values) => {
      dispatch(CreateConsultFranchiseActionAsync(values));
    },
  });

  return (
    <div className="header-carousel-item">
      <img
        src="../../../../public/Logo/g1.jpg"
        className="img-fluid w-100"
        alt="Image"
      />
      <div className="carousel-caption">
        <div className="container align-items-center py-4">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7">
              <div className="text-start">
                <h4 className="text-primary text-uppercase fw-bold mb-4">
                  Welcome To IT Center
                </h4>
                <h1 className="display-4 text-uppercase text-white mb-4">
                  The Biggest Theme &amp; Amusement Park
                </h1>
                <p className="mb-4 fs-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy...
                </p>
                <div className="d-flex flex-shrink-0">
                  <a
                    className="btn btn-primary rounded-pill text-white py-3 px-5"
                    href="#"
                  >
                    Our Packages
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ticket-form p-5">
                <h2 className="text-dark text-uppercase mb-4">
                  Booking Franchise
                </h2>
                <form onSubmit={formFranchiseConsult.handleSubmit}>
                  <div className="row g-4">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control border-0 py-2"
                        id="customerName"
                        name="customerName"
                        placeholder="Your Name"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.customerName}
                      />
                    </div>
                    <div className="col-12 col-xl-6">
                      <input
                        type="email"
                        className="form-control border-0 py-2"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.email}
                      />
                    </div>
                    <div className="col-12 col-xl-6">
                      <input
                        type="phone"
                        className="form-control border-0 py-2"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.phoneNumber}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
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
      </div>
    </div>
  );
};

export default FormFranchise;
