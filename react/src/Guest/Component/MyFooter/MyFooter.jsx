import React, { forwardRef } from "react";

const MyFooter = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.2s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <a href="index.html" className="p-0">
                <h4 className="text-white mb-4">
                  <i className="fas fa-swimmer text-primary me-3" />
                  FutureTech
                </h4>
              </a>

              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-primary me-3" />
                <p className="text-white mb-0">Hồ Chí Minh, Việt Nam</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-envelope text-primary me-3" />
                <p className="text-white mb-0">info@futureTech.com</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-phone-alt text-primary me-3" />
                <p className="text-white mb-0">1234567890</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-2">
            <div className="footer-item">
              <h4 className="text-white mb-4">Danh mục</h4>
              <a href="#">
                <i className="fas fa-angle-right me-2" /> Thông tin
              </a>

              <a href="#">
                <i className="fas fa-angle-right me-2" /> Liên hệ
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-2">
            <div className="footer-item">
              <h4 className="text-white mb-4">Hổ trợ</h4>
              <a href="#">
                <i className="fas fa-angle-right me-2" />Điều khoản
              </a>

              <a href="#">
                <i className="fas fa-angle-right me-2" /> Hổ trợ
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2" /> FAQ
              </a>

            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <h4 className="text-white mb-4">Giờ hoạt động</h4>
              <div className="opening-date mb-3 pb-3">
                <div className="opening-clock flex-shrink-0">
                  <h6 className="text-white mb-0 me-auto">thứ 2  - thứ 7:</h6>
                  <p className="mb-0">
                    <i className="fas fa-clock text-primary me-2" /> 09:00 AM -
                    17:00 PM
                  </p>
                </div>
              </div>
              <div>
                <p className="text-white mb-2">Thanh toán </p>
                <img src="/img/payment.png" className="img-fluid" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MyFooter;
