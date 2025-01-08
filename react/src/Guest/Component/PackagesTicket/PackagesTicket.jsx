import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPackageActionAsync } from "../../../Redux/ReducerAPI/PackageReducer";

// const packageTicket = [
//   {
//     name: "Gói tiêu chuẩn",
//     description: "Cung cấp tiêu chuẩn nhượng quyền cho chi nhánh",
//     price: 30000000,
//     numberOfUsers: 2000,
//     status: "Standard",
//   },
//   {
//     name: "Gói tùy chỉnh cơ bản",
//     description: "Cho phép tùy chỉnh hạn mức và số lượng người dùng theo nhu cầu",
//     price: 50000000,
//     numberOfUsers: 5000,
//     status: "Custom",
//   },
//   {
//     name: "Gói nâng cao",
//     description: "Cung cấp các quyền lợi và công cụ nâng cao cho chi nhánh",
//     price: 70000000,
//     numberOfUsers: 10000,
//     status: "Standard",
//   },
// ];

const PackagesTicket = () => {
  const { packageTicket } = useSelector((state) => state.PackageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPackageActionAsync())
  }, []);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Gói nhượng quyền</h4>
          <h1 className="display-5 mb-4">Gói thành viên</h1>
        </div>
        <div className="row g-5 align-items-center">
          {packageTicket.map((pkg, index) => (
            <div key={index} className={`col-lg-6 col-xl-4 wow fadeInUp`} data-wow-delay={`0.${4 + index}s`}>
              <div className={`pricing-item ${pkg.status === 'Custom' ? 'bg-primary' : 'bg-dark'} rounded text-center p-5 h-100`}>
                <div className="pb-4 border-bottom">
                  <h2 className={`mb-4 ${pkg.status === 'Custom' ? 'text-dark' : 'text-primary'}`}>{pkg.name}</h2>
                  <p className={`mb-4 ${pkg.status === 'Custom' ? 'text-white' : ''}`}>
                    {pkg.description}
                  </p>
                  <h2 className={`mb-0 ${pkg.status === 'Custom' ? 'text-dark' : 'text-primary'}`}>
                    {formatPrice(pkg.price)}
                    <span className={`${pkg.status === 'Custom' ? 'text-white' : 'text-body'} fs-5 fw-normal`}>/gói</span>
                  </h2>
                </div>
                <div className={`py-4 ${pkg.status === 'Custom' ? 'text-white' : ''}`}>
                  <p className="mb-4">
                    <i className={`fa fa-check ${pkg.status === 'Custom' ? 'text-dark' : 'text-primary'} me-2`} />
                    Số lượng người dùng: {pkg.numberOfUsers.toLocaleString()}
                  </p>
                  <p className="mb-4">
                    <i className={`fa fa-check ${pkg.status === 'Custom' ? 'text-dark' : 'text-primary'} me-2`} />
                    {pkg.status === 'Custom' ? 'Tùy chỉnh theo nhu cầu' : 'Tiêu chuẩn nhượng quyền'}
                  </p>
                  <p className="mb-4">
                    <i className={`fa fa-check ${pkg.status === 'Custom' ? 'text-dark' : 'text-primary'} me-2`} />
                    {pkg.status === 'Custom' ? 'Hỗ trợ ưu tiên' : 'Hỗ trợ cơ bản'}
                  </p>
                  {pkg.status === 'Custom' && (
                    <p className="mb-4">
                      <i className="fa fa-check text-dark me-2" />
                      Công cụ nâng cao
                    </p>
                  )}
                </div>
                <a href="#" className={`btn ${pkg.status === 'Custom' ? 'btn-dark' : 'btn-light'} rounded-pill py-3 px-5`}>
                  {pkg.status === 'Custom' ? 'Liên hệ tư vấn' : 'Đăng ký ngay'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesTicket;

