import React, { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCourseCategoryActionAsync } from "../../../Redux/ReducerAPI/CourseCategoryReducer";
import { GetCourseActionAsync } from "../../../Redux/ReducerAPI/CourseReducer";
import { Spin, Popover } from "antd";

const ViewCourse = forwardRef(({ onRegisterNow }, ref) => {
  const { courseCategory } = useSelector(
    (state) => state.CourseCategoryReducer
  );
  const { course } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  const [courseCategoryId, setCourseCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(GetCourseCategoryActionAsync()).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    dispatch(GetCourseActionAsync(courseCategoryId)).then(() => setLoading(false));
  }, [courseCategoryId]);

  const handleTabClick = (categoryId) => {
    setCourseCategoryId(categoryId);
  };

  return (
    <div className="container-xxl py-5" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Khóa học
          </h6>
          <h1 className="mb-4">Khóa Học Đang Mở</h1>
        </div>

        <ul className="nav nav-pills mb-5 justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${courseCategoryId === null ? "active" : ""}`}
              onClick={() => handleTabClick(null)}
            >
              Tất cả khóa học
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

        <Spin spinning={loading} tip="Đang tải...">
          <div className="row g-4">
            {course.map((course) => (
              <div className="col-lg-3 col-md-6" key={course.id}>
                <div className="course-item">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid"
                      src={course.urlImage}
                      alt={course.name}
                    />
                  </div>
                  <div className="course-content">
                    <div className="course-title">{course.name}</div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="course-price">
                        {course.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </div>
                      <div className="course-lessons">
                        {course.numberOfLession} bài học
                      </div>
                    </div>
                    <div className="course-buttons">
                      <button className="course-button btn btn-primary" onClick={() => onRegisterNow(course.id)}>
                        Đăng ký ngay
                      </button>
                      <Popover 
                        content={
                          <div className="course-description">
                            {course.description}
                          </div>
                        } 
                        title="Chi tiết khóa học" 
                        trigger="click"
                      >
                        <button className="course-button course-button-secondary">
                          Chi tiết
                        </button>
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Spin>
      </div>
    </div>
  );
});

export default ViewCourse;


