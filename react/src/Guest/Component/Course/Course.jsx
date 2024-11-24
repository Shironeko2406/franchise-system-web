import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
};

const attractionsData = [
  {
    src: "/img/attraction-1.jpg",
    alt: "Khóa Đào Tạo Tester",
    name: "Khóa Đào Tạo Tester",
    delay: "0.2s",
  },
  {
    src: "/img/attraction-2.jpg",
    alt: "React Js",
    name: "React Js",
    delay: "0.4s",
  },
  {
    src: "/img/attraction-3.jpg",
    alt: "Lập Trình C#",
    name: "Lập Trình C#",
    delay: "0.6s",
  },
  {
    src: "/img/attraction-4.jpg",
    alt: "Khóa học Python",
    name: "Khóa học Python",
    delay: "0.8s",
  },
];

const Course = () => {
  return (
    <div className="container-fluid attractions py-5">
      <div className="container attractions-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Khóa Học</h4>
          <h1 className="display-5 text-white mb-4">
            Thực Chiến Phù Hợp Với Yêu Cầu Doanh Nghiệp
          </h1>
          <p className="text-white mb-0">
            Khóa học được thiết kế thực tế, bám sát yêu cầu tuyển dụng của doanh nghiệp, giúp học viên phát triển kỹ năng chuyên môn và sẵn sàng tham gia vào thị trường lao động ngay sau khi hoàn thành.
          </p>
        </div>

        <Slider {...settings}>
          {attractionsData.map((attraction, index) => (
            <div
              key={index}
              className="attractions-item wow fadeInUp"
              data-wow-delay={attraction.delay}
            >
              <img
                src={attraction.src}
                className="img-fluid rounded w-100"
                alt={attraction.alt}
              />
              <h3 className="attractions-name">{attraction.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Course;
