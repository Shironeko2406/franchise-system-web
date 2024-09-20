import React, { useEffect, useState } from "react";
import "./FormFranchise.css";
import { useDispatch, useSelector } from "react-redux";
import { GetCityDataActionAsync } from "../../../Redux/ReducerAPI/CityReducer";
import { useFormik } from "formik";
import { CreateConsultFranchiseActionAsync } from "../../../Redux/ReducerAPI/ConsultationsReducer";

const FormFranchise = () => {
  const dispatch = useDispatch();
  const { cityData } = useSelector((state) => state.CityReducer);

  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    dispatch(GetCityDataActionAsync());
  }, []);

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
    const selectedCityData = cityData.find((city) => city.Id === cityId);
    setDistricts(selectedCityData ? selectedCityData.Districts : []);
    setWards([]); // Reset wards when changing city
    formFranchiseConsult.setFieldValue("city", cityId); // Set city in Formik
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    const selectedDistrictData = districts.find(
      (district) => district.Id === districtId
    );
    setWards(selectedDistrictData ? selectedDistrictData.Wards : []);
    formFranchiseConsult.setFieldValue("district", districtId); // Set district in Formik
  };

  const formFranchiseConsult = useFormik({
    initialValues: {
      customerName: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      district: "",
      ward: "",
      budget: "",
    },
    onSubmit: (values) => {
      // Get the selected city, district, and ward names
      const selectedCityName = cityData.find(
        (city) => city.Id === values.city
      )?.Name;
      const selectedDistrictName = districts.find(
        (district) => district.Id === values.district
      )?.Name;
      const selectedWardName = wards.find(
        (ward) => ward.Id === values.ward
      )?.Name;

      const fullAddress = `${values.address}, ${selectedWardName}, ${selectedDistrictName}, ${selectedCityName}`;

      // Prepare data to send
      const datasend = {
        customerName: values.customerName,
        phoneNumber: values.phoneNumber,
        email: values.email,
        address: fullAddress, // Full address with house number, ward, district, and city
        budget: values.budget,
      };
      dispatch(CreateConsultFranchiseActionAsync(datasend));
    },
  });

  return (
    <div className="header-carousel-item">
      <img
        src="../../../../public/Logo/g1.jpg"
        className="img-fluid w-100"
        alt="Image"
      />
      <div className="carousel-caption">
        <div className="container align-items-center py-4">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7">
              <div className="text-start">
                <h4 className="text-primary text-uppercase fw-bold mb-4">
                  Welcome To IT Center
                </h4>
                <h1 className="display-4 text-uppercase text-white mb-4">
                  The Biggest Theme &amp; Amusement Park
                </h1>
                <p className="mb-4 fs-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy...
                </p>
                <div className="d-flex flex-shrink-0">
                  <a
                    className="btn btn-primary rounded-pill text-white py-3 px-5"
                    href="#"
                  >
                    Our Packages
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ticket-form p-5">
                <h2 className="text-dark text-uppercase mb-4">
                  Booking Franchise
                </h2>
                <form onSubmit={formFranchiseConsult.handleSubmit}>
                  <div className="row g-4">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control border-0 py-2"
                        id="customerName"
                        name="customerName"
                        placeholder="Your Name"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.customerName}
                      />
                    </div>
                    <div className="col-12 col-xl-6">
                      <input
                        type="email"
                        className="form-control border-0 py-2"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.email}
                      />
                    </div>
                    <div className="col-12 col-xl-6">
                      <input
                        type="phone"
                        className="form-control border-0 py-2"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.phoneNumber}
                      />
                    </div>

                    {/* Province Select */}
                    <div className="col-12">
                      <select
                        className="form-select border-0 py-2"
                        value={selectedCity}
                        onChange={handleCityChange}
                      >
                        <option value="">Chọn tỉnh thành</option>
                        {cityData.map((city) => (
                          <option key={city.Id} value={city.Id}>
                            {city.Name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* District Select */}
                    <div className="col-12">
                      <select
                        className="form-select border-0 py-2"
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        disabled={!districts.length}
                      >
                        <option value="">Chọn quận huyện</option>
                        {districts.map((district) => (
                          <option key={district.Id} value={district.Id}>
                            {district.Name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Ward Select */}
                    <div className="col-12">
                      <select
                        className="form-select border-0 py-2"
                        onChange={(e) =>
                          formFranchiseConsult.setFieldValue(
                            "ward",
                            e.target.value
                          )
                        }
                        disabled={!wards.length}
                      >
                        <option value="">Chọn phường xã</option>
                        {wards.map((ward) => (
                          <option key={ward.Id} value={ward.Id}>
                            {ward.Name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control border-0 py-2"
                        id="address"
                        name="address"
                        placeholder="House number, Street name"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.address}
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="number"
                        className="form-control border-0 py-2"
                        id="budget"
                        name="budget"
                        placeholder="Budget"
                        onChange={formFranchiseConsult.handleChange}
                        value={formFranchiseConsult.values.budget}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 px-5"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFranchise;
