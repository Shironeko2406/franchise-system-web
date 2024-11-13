import React from "react";

const OurService = () => {
  const services = [
    {
      icon: "fa fa-code fa-4x",
      title: "Code",
      description: "Tạo nên các giải pháp kỹ thuật độc đáo và hiệu quả.",
      delay: "0.2s",
    },
    {
      icon: "fas fa-utensils fa-4x",
      title: "Eat",
      description: "Thưởng thức ẩm thực phong phú, bổ dưỡng.",
      delay: "0.4s",
    },
    {
      icon: "fa fa-gamepad fa-4x",
      title: "Game",
      description: "Trải nghiệm thế giới giải trí sống động và vui nhộn.",
      delay: "0.6s",
    },
    {
      icon: "fas fa-bed fa-4x",
      title: "Sleep",
      description: "Thư giãn và phục hồi năng lượng mỗi ngày.",
      delay: "0.8s",
    },
];


  const operatingHours = [
    {
      day: "Thứ hai - Thứ sáu",
      time: "11:00 AM - 16:00 PM",
    },
    {
      day: "Thứ bảy - Chủ nhật",
      time: "09:00 AM - 17:00 PM",
    },
    {
      day: "Ngày lễ",
      time: "09:00 AM - 17:00 PM",
    },
  ];

  return (
    <div className="container-fluid service py-5">
      <div className="container service-section py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Dịch Vụ</h4>
          <h1 className="display-5 text-white mb-4">
            Đào Tạo Chuyên Gia Lập Trình
          </h1>
          <p className="mb-0 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
          <div
            className="col-md-10 col-lg-8 col-xl-8 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-days p-4">
              {operatingHours.map((hour, index) => (
                <div
                  key={index}
                  className={`py-2 ${
                    index === 0
                      ? "border-bottom border-top"
                      : "border-bottom"
                  } d-flex align-items-center justify-content-between flex-wrap`}
                >
                  <h4 className="mb-0">{hour.day}</h4>
                  <p className="mb-0">
                    <i className="fas fa-clock text-primary me-2" />
                    {hour.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-0 col-md-1 col-lg-2 col-xl-2" />
          {services.map((service, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay={service.delay}
            >
              <div className="service-item p-4">
                <div className="service-content">
                  <div className="mb-4">
                    <i className={service.icon} />
                  </div>
                  <a href="#" className="h4 d-inline-block mb-3">
                    {service.title}
                  </a>
                  <p className="mb-0">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
