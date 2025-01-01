import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from 'yup';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { GetAgencyAddressesActionAsync } from "../../../Redux/ReducerAPI/AgencyReducer";
import { GetAllCoursesAvailableActionAsync } from "../../../Redux/ReducerAPI/CourseReducer";
import { Spin } from "antd";
import { GetClassesActionAsync } from "../../../Redux/ReducerAPI/ClassReducer";
import { useNavigate } from "react-router-dom";

const carouselData = [
  {
    imgSrc: "/img/carousel-1.jpg",
    title: "Chào mừng học viên",
    heading: "Tham gia học ngay",
    text: "Chào mừng bạn đến với FutureTech – nơi khơi nguồn đam mê và phát triển kỹ năng công nghệ thông tin. Chúng tôi tự hào là trung tâm đào tạo hàng đầu trong lĩnh vực IT, cung cấp các khóa học chất lượng cao từ cơ bản đến nâng cao, phù hợp với mọi đối tượng từ học sinh, sinh viên đến các chuyên gia đang làm việc",
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
  district: Yup.string()
    .required('Vui lòng chọn quận/huyện'),
  agency: Yup.string()
    .required('Vui lòng chọn chi nhánh'),
  course: Yup.string()
    .required('Vui lòng chọn khóa học bạn muốn tư vấn'),
});

const translateDayOfWeek = (dayOfWeekString) => {
  const dayTranslation = {
    Monday: "Thứ Hai",
    Tuesday: "Thứ Ba",
    Wednesday: "Thứ Tư",
    Thursday: "Thứ Năm",
    Friday: "Thứ Sáu",
    Saturday: "Thứ Bảy",
    Sunday: "Chủ Nhật",
  };

  const [days, startTime, endTime] = dayOfWeekString.split("-");

  const translatedDays = days
    .split(", ")
    .map((day) => day.trim())
    .map((day) => dayTranslation[day] || day)
    .join(", ");

  const formattedStartTime = startTime.slice(0, 5);
  const formattedEndTime = endTime.slice(0, 5);

  return `${translatedDays} - ${formattedStartTime} đến ${formattedEndTime}`;
};

const BookCourse = ({ selectedCourseId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { agencyData } = useSelector((state) => state.AgencyReducer);
  const { courseAvailable } = useSelector((state) => state.CourseReducer);
  const { classData } = useSelector((state) => state.ClassReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filteredAgencies, setFilteredAgencies] = useState([]);

  const formBookCourse = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      district: "",
      agency: "",
      course: selectedCourseId || "",
      class: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      const selectedCourse = courseAvailable.find(course => course.id === values.course);
      const selectedAgency = agencyData.find(agency => agency.id === values.agency);
      const registrationData = {
        studentName: values.name,
        email: values.email,
        phoneNumber: values.phone,
        agency: values.agency,
        agencyFullAddress: selectedAgency ? selectedAgency.fullAddress : '',
        course: values.course,
        courseName: selectedCourse ? selectedCourse.name : '',
      };
      setIsLoading(false);
      navigate('/schedule', { state: { registrationData } });
    },
  });

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

  useEffect(() => {
    if (selectedCourseId) {
      formBookCourse.setFieldValue("course", selectedCourseId);
    }
  }, [selectedCourseId]);

  useEffect(() => {
    if (formBookCourse.values.city) {
      const selectedCityData = agencyData.filter(agency => agency.city === formBookCourse.values.city);
      const uniqueDistricts = [...new Set(selectedCityData.map(agency => agency.district))];
      setDistricts(uniqueDistricts);
    } else {
      setDistricts([]);
    }
  }, [formBookCourse.values.city, agencyData]);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    formBookCourse.setFieldValue('phone', value);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    formBookCourse.setFieldValue('city', selectedCity);
    formBookCourse.setFieldValue('district', '');
    formBookCourse.setFieldValue('agency', '');
    formBookCourse.setFieldValue('class', '');

    if (selectedCity) {
      const agencies = agencyData.filter(agency => agency.city === selectedCity);
      setFilteredAgencies(agencies);
    } else {
      setFilteredAgencies([]);
    }
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    formBookCourse.setFieldValue('district', selectedDistrict);
    formBookCourse.setFieldValue('agency', '');
    formBookCourse.setFieldValue('class', '');

    if (selectedDistrict) {
      const agencies = agencyData.filter(agency => agency.city === formBookCourse.values.city && agency.district === selectedDistrict);
      setFilteredAgencies(agencies);
    } else {
      setFilteredAgencies([]);
    }
  };

  const handleAgencyChange = async (e) => {
    const selectedAgency = e.target.value;
    formBookCourse.setFieldValue('agency', selectedAgency);
    formBookCourse.setFieldValue('class', '');

    if (selectedAgency) {
      const agencies = agencyData.filter(agency => agency.city === formBookCourse.values.city && agency.district === formBookCourse.values.district);
      setFilteredAgencies(agencies);

      await dispatch(GetClassesActionAsync(formBookCourse.values.course, selectedAgency));
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
                    <p>{item.text}</p>
                  </div>
                </div>

                <div className="col-xl-5">
                  <div className="ticket-form p-5 bg-white rounded-lg shadow-lg">
                    <h2 className="text-primary text-uppercase mb-4 text-center">
                      Đăng Ký Khóa Học
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
                            <option value="">Chọn khóa học bạn muốn đăng ký</option>
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
                            className={`form-select border-0 py-2 bg-light ${formBookCourse.touched.district && formBookCourse.errors.district ? 'is-invalid' : ''}`}
                            id="district"
                            name="district"
                            onChange={handleDistrictChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.district}
                            disabled={!formBookCourse.values.city}
                          >
                            <option value="">Bước 2: Chọn quận/huyện</option>
                            {districts.map((district) => (
                              <option key={district} value={district}>
                                {district}
                              </option>
                            ))}
                          </select>
                          {formBookCourse.touched.district && formBookCourse.errors.district && (
                            <div className="invalid-feedback text-danger">{formBookCourse.errors.district}</div>
                          )}
                        </div>
                        <div className="col-12">
                          <select
                            className={`form-select border-0 py-2 bg-light ${formBookCourse.touched.agency && formBookCourse.errors.agency ? 'is-invalid' : ''}`}
                            id="agency"
                            name="agency"
                            onChange={handleAgencyChange}
                            onBlur={formBookCourse.handleBlur}
                            value={formBookCourse.values.agency}
                            disabled={!formBookCourse.values.district}
                          >
                            <option value="">Bước 3: Chọn chi nhánh</option>
                            {filteredAgencies.map((agency) => (
                              <option key={agency.id} value={agency.id}>
                                {agency.fullAddress.replace(`, ${formBookCourse.values.district}, ${formBookCourse.values.city}`, '').trim()}
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
                              Tiếp tục chọn lịch học
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

export default BookCourse;