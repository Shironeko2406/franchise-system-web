import React from "react";

const features = [
  {
    title: "Tâm Huyết",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-heart",
  },
  {
    title: "Sáng Tạo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-briefcase",
  },
  {
    title: "Đa Dạng",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-flag-checkered",
  },
  {
    title: "Bền Bỉ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "fas fa-chart-line",
  },
];

const counters = [
  {
    count: 150,
    label: "Happy Visitors",
    icon: "fas fa-thumbs-up",
    bgColor: "bg-primary",
  },
  {
    count: 122,
    label: "Awards Winning",
    icon: "fas fa-certificate",
    bgColor: "bg-dark",
  },
];

const AboutUs = () => {
  return (
    <div className="container-fluid about pb-5">
      <div className="container pb-5">
        <div className="row g-5">
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
            <div>
              <h4 className="text-primary">Về FututeTech</h4>
              <h1 className="display-5 mb-4">
                Dạy Lập trình &amp; Cung Cấp Nhượng Quyền Mô Hình Trung Tâm
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis eligendi illum inventore maiores incidunt vero id. Est
                ipsam, distinctio veritatis earum inventore ab fugit officiis ut
                ullam, laudantium facere sapiente?
              </p>
              <div className="row g-4">
                {features.map((feature, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="d-flex">
                      <div className="me-3">
                        <i className={`${feature.icon} fa-3x text-primary`} />
                      </div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="position-relative rounded">
              <div className="rounded" style={{ marginTop: 40 }}>
                <div className="row g-0">
                  <div className="col-lg-12">
                    <div className="rounded mb-4">
                      <img
                        src="/img/about.jpg"
                        className="img-fluid rounded w-100"
                        alt=""
                      />
                    </div>
                    <div className="row gx-4 gy-0">
                      {counters.map((counter, index) => (
                        <div className="col-6" key={index}>
                          <div
                            className={`counter-item ${counter.bgColor} rounded text-center p-4 h-100`}
                          >
                            <div className="counter-item-icon mx-auto mb-3">
                              <i
                                className={`${counter.icon} fa-3x text-white`}
                              />
                            </div>
                            <div className="counter-counting mb-3">
                              <span
                                className="text-white fs-2 fw-bold"
                                data-toggle="counter-up"
                              >
                                {counter.count}
                              </span>
                              <span className="h1 fw-bold text-white">K +</span>
                            </div>
                            <h5 className="text-white mb-0">{counter.label}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="rounded bg-primary p-4 position-absolute d-flex justify-content-center"
                style={{
                  width: "90%",
                  height: 80,
                  top: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <h3 className="mb-0 text-white">20 Năm Kinh Nghiệm</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
