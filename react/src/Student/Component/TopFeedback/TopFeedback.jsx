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
    quote: "Khóa học rất bổ ích và thú vị. Tôi đã học được rất nhiều kiến thức mới.",
    name: "Nguyễn Văn An",
    profession: "Sinh viên",
    imageSrc: "/img/testimonial-1.jpg",
    stars: 5
  },
  {
    id: 2,
    quote: "Giảng viên nhiệt tình và nội dung khóa học rất dễ hiểu.",
    name: "Trần Thị Bình",
    profession: "Nhân viên văn phòng",
    imageSrc: "/img/testimonial-2.jpg",
    stars: 4
  },
  {
    id: 3,
    quote: "Tôi rất hài lòng với khóa học này. Sẽ giới thiệu cho bạn bè.",
    name: "Lê Văn Cát",
    profession: "Sinh viên",
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
          <h4 className="text-primary">Đánh giá</h4>
          <h1 className="display-5 text-white mb-4">Phản hồi về khóa học của các học viên</h1>
          <p className="text-white mb-0">
            Chúng tôi rất tự hào về những phản hồi tích cực từ các học viên. Những đánh giá này
            giúp chúng tôi không ngừng cải thiện và mang lại những khóa học tốt nhất.
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
