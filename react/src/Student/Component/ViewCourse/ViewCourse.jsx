import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCourseCategoryActionAsync } from "../../../Redux/ReducerAPI/CourseCategoryReducer";
import { GetCourseActionAsync } from "../../../Redux/ReducerAPI/CourseReducer";

const ViewCourse = () => {
  const { courseCategory } = useSelector(
    (state) => state.CourseCategoryReducer
  );
  const { course } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  const [courseCategoryId, setCourseCategoryId] = useState(null);
  console.log(course)

  useEffect(() => {
    dispatch(GetCourseCategoryActionAsync());
  }, []);

  useEffect(() => {
    dispatch(GetCourseActionAsync(courseCategoryId)); // Gọi API với courseCategoryId từ state
  }, [courseCategoryId]);

  const handleTabClick = (categoryId) => {
    setCourseCategoryId(categoryId); // Cập nhật courseCategoryId khi chọn category
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Courses
          </h6>
          <h1 className="mb-4">Popular Courses</h1>
        </div>

        {/* Tabs navigation */}
        <ul
          className="nav nav-pills mb-3 justify-content-start w-100"
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <li className="nav-item">
            <button
              className={`nav-link ${
                courseCategoryId === null ? "active" : ""
              }`}
              onClick={() => handleTabClick(null)}
            >
              All Courses
            </button>
          </li>
          {courseCategory.map((category) => (
            <li className="nav-item" key={category.id}>
              <button
                className={`nav-link ${
                  courseCategoryId === category.id ? "active" : ""
                }`}
                onClick={() => handleTabClick(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab content */}
        <div className="row g-4">
          {course.map((course) => (
            <div className="col-lg-3 col-md-4" key={course.id}>
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src={course.urlImage}
                    alt={course.name}
                  />
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <a
                      href="#"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                      style={{ borderRadius: "30px 0 0 30px" }}
                    >
                      Read More
                    </a>
                    <a
                      href="#"
                      className="flex-shrink-0 btn btn-sm btn-primary px-3"
                      style={{ borderRadius: "0 30px 30px 0" }}
                    >
                      Join Now
                    </a>
                  </div>
                </div>
                <div className="text-center p-4 pb-0">
                  <h3 className="mb-0">{course.price}</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small>(100)</small>
                  </div>
                  <h5 className="mb-4">{course.name}</h5>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-user-tie text-primary me-2" />
                    Hiếu
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-clock text-primary me-2" />
                    {course.numberOfLession} Bài học
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-user text-primary me-2" />
                    60 Students
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
