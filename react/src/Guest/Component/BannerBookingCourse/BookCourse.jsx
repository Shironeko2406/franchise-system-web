import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { GetAgencyAddressesActionAsync } from "../../../Redux/ReducerAPI/AgencyReducer";
import { GetAllCoursesAvailableActionAsync } from "../../../Redux/ReducerAPI/CourseReducer";
import { RegisterCourseActionAsync } from "../../../Redux/ReducerAPI/RegisterCourseReducer";
import { Spin } from "antd";

const carouselData = [
  {
    imgSrc: "/img/carousel-1.jpg",
    title: "Chào mừng học viên",
    heading: "Tham gia học ngay",
    formType: "register",
  },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Vui lòng nhập tên của bạn')
    .min(2, 'Tên phải có ít nhất 2 ký tự')
    .max(50, 'Tên không được vượt quá 50 ký tự'),
  email: Yup.string()
    .required('Vui lòng nhập địa chỉ email')
    .email('Địa chỉ email không hợp lệ'),
  phone: Yup.string()
    .required('Vui lòng nhập số điện thoại')
    .matches(/^0[0-9]+$/, "Số điện thoại phải bắt đầu bằng số 0")
    .min(10, 'Số điện thoại phải có ít nhất 10 chữ số')
    .max(11, 'Số điện thoại không được vượt quá 11 chữ số'),
  city: Yup.string()
    .required('Vui lòng chọn tỉnh/thành phố'),
  agency: Yup.string()
    .required('Vui lòng chọn chi nhánh'),
  course: Yup.string()
    .required('Vui lòng chọn khóa học bạn muốn tư vấn'),
});

export default function BookCourse() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { agencyData } = useSelector((state) => state.AgencyReducer);
  const { courseAvailable } = useSelector((state) => state.CourseReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [filteredAgencies, setFilteredAgencies] = useState([]);

  useEffect(() => {
    dispatch(GetAgencyAddressesActionAsync());
    dispatch(GetAllCoursesAvailableActionAsync());
  }, [dispatch]);

  useEffect(() => {
    if (agencyData.length > 0) {
      const uniqueCities = [...new Set(agencyData.map(agency => agency.city))];
      setCities(uniqueCities);
    }
  }, [agencyData]);

  const formBookCourse = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      agency: "",
      course: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      const formattedDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
      const valuesSend = {
        studentName: values.name,
        email: values.email,
        phoneNumber: values.phone,
        agencyId: values.agency,
        courseId: values.course,
        date: formattedDate
      };
      console.log("Register Form:", valuesSend);
      dispatch(RegisterCourseActionAsync(valuesSend))
        .then(() => {
          resetForm();
        })
        .finally(() => setIsLoading(false));
    },
  });

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    formBookCourse.setFieldValue('phone', value);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    formBookCourse.setFieldValue('city', selectedCity);
    formBookCourse.setFieldValue('agency', '');

    if (selectedCity) {
      const agencies = agencyData.filter(agency => agency.city === selectedCity);
      setFilteredAgencies(agencies);
    } else {
      setFilteredAgencies([]);
    }
  };

  return (
    <Carousel
      activeIndex={currentIndex}
      onSelect={setCurrentIndex}
      interval={null}
      indicators={false}
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
                  </div>
                </div>

                <div className="col-xl-5">
                  <div className="ticket-form p-5 bg-white rounded-lg shadow-lg">
                    <h2 className="text-primary text-uppercase mb-4 text-center">
                      Tư Vấn Khóa Học
                    </h2>
                    <form onSubmit={formBookCourse.handleSubmit}>
                      <div className="row g-4">
                        <div className="col-12">
                          <input
                            type="text"
                            className={`form-control border-0 py-2 bg-light ${formBookCourse.touched.name && formBookCourse.errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            placeholder="Tên của bạn"
                            onChange={formBookCourse.handleChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.name}
                          />
                          {formBookCourse.touched.name && formBookCourse.errors.name && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.name}</div>
                          )}
                        </div>
                        <div className="col-12 col-xl-6">
                          <input
                            type="email"
                            className={`form-control border-0 py-2 bg-light ${formBookCourse.touched.email && formBookCourse.errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            placeholder="Địa chỉ email của bạn"
                            onChange={formBookCourse.handleChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.email}
                          />
                          {formBookCourse.touched.email && formBookCourse.errors.email && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.email}</div>
                          )}
                        </div>
                        <div className="col-12 col-xl-6">
                          <input
                            type="tel"
                            className={`form-control border-0 py-2 bg-light ${formBookCourse.touched.phone && formBookCourse.errors.phone ? 'is-invalid' : ''}`}
                            id="phone"
                            name="phone"
                            placeholder="Số điện thoại"
                            onChange={handlePhoneChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.phone}
                          />
                          {formBookCourse.touched.phone && formBookCourse.errors.phone && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.phone}</div>
                          )}
                        </div>
                        <div className="col-12">
                          <select
                            className={`form-select border-0 py-2 bg-light ${formBookCourse.touched.course && formBookCourse.errors.course ? 'is-invalid' : ''}`}
                            id="course"
                            name="course"
                            onChange={formBookCourse.handleChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.course}
                          >
                            <option value="">Chọn khóa học bạn muốn tư vấn</option>
                            {courseAvailable.map((courseItem) => (
                              <option key={courseItem.id} value={courseItem.id}>
                                {courseItem.name}
                              </option>
                            ))}
                          </select>
                          {formBookCourse.touched.course && formBookCourse.errors.course && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.course}</div>
                          )}
                        </div>
                        <div className="col-12">
                          <h5 className="text-primary">Chọn Địa Chỉ Chi Nhánh Bạn Muốn Học</h5>
                        </div>
                        <div className="col-12">
                          <select
                            className={`form-select border-0 py-2 bg-light ${formBookCourse.touched.city && formBookCourse.errors.city ? 'is-invalid' : ''}`}
                            id="city"
                            name="city"
                            onChange={handleCityChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.city}
                          >
                            <option value="">Bước 1: Chọn tỉnh/thành phố</option>
                            {cities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                          {formBookCourse.touched.city && formBookCourse.errors.city && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.city}</div>
                          )}
                        </div>
                        <div className="col-12">
                          <select
                            className={`form-select border-0 py-2 bg-light ${formBookCourse.touched.agency && formBookCourse.errors.agency ? 'is-invalid' : ''}`}
                            id="agency"
                            name="agency"
                            onChange={formBookCourse.handleChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.agency}
                            disabled={!formBookCourse.values.city}
                          >
                            <option value="">Bước 2: Chọn chi nhánh</option>
                            {filteredAgencies.map((agency) => (
                              <option key={agency.id} value={agency.id}>
                                {agency.fullAddress}
                              </option>
                            ))}
                          </select>
                          {formBookCourse.touched.agency && formBookCourse.errors.agency && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.agency}</div>
                          )}
                        </div>
                        <div className="col-12">
                          <Spin spinning={isLoading}>
                            <button
                              type="submit"
                              className="btn btn-primary w-100 py-2 px-5 text-white font-weight-bold"
                              disabled={isLoading}
                            >
                              Tư Vấn
                            </button>
                          </Spin>
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
}

