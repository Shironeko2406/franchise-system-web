import { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Upload, Typography, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { GetCityDataActionAsync } from "../../../Redux/ReducerAPI/CityReducer";
import { RegisterAgencyActionAsync } from "../../../Redux/ReducerAPI/AgencyReducer";
import { imageDB } from "../../../Firebase/Config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const { Title } = Typography;

const AgencyRegistration = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { cityData } = useSelector((state) => state.CityReducer);

  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    dispatch(GetCityDataActionAsync());
  }, [dispatch]);

  const handleCityChange = (cityName) => {
    const selectedCityData = cityData.find((city) => city.Name === cityName);
    setDistricts(selectedCityData ? selectedCityData.Districts : []);
    setWards([]);
    setSelectedCity(cityName);
    setSelectedWard("");
    setSelectedDistrict("");
    form.setFieldsValue({ district: undefined, ward: undefined });
  };


  const handleDistrictChange = (districtName) => {
    const selectedDistrictData = districts.find(
      (district) => district.Name === districtName

    );
    console.log(selectedDistrictData);
    setWards(selectedDistrictData ? selectedDistrictData.Wards : []);
    setSelectedDistrict(districtName);
    setSelectedWard("");
    form.setFieldsValue({ ward: undefined });
  };

  const handleWardChange = (wardName) => {
    setSelectedWard(wardName);
  };

  const handleUpload = ({ file, onSuccess, onError }) => {
    const storageRef = ref(imageDB, `images/${file.name}`); // Create reference to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
      },
      (error) => {
        // If there's an error during upload
        message.error("Upload failed!");
        console.error(error);
        onError(error); // Notify Ant Design Upload component of the error
      },
      async () => {
        // If upload is successful
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUrl(downloadURL); // Save the image URL
          message.success("Upload successful!");
          onSuccess(null, file); // Notify Ant Design Upload component that upload was successful
        } catch (err) {
          message.error("Failed to retrieve image URL.");
          console.error(err);
          onError(err); // Notify Ant Design Upload component of the error
        }
      }
    );
  };


  const onFinish = (values) => {
    const formData = {
      ...values,
      positionImageURL: imageUrl, // Địa chỉ URL của hình ảnh
    };
    console.log("Form values: ", formData);
    dispatch(RegisterAgencyActionAsync(formData))
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <Row justify="center">
        {/* Responsive for different screen sizes */}
        <Col xs={24} sm={18} md={16} lg={12}>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "40px",
              borderRadius: "10px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Title
              level={3}
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              Đăng ký chi nhánh
            </Title>
            <Form
              form={form}
              layout="vertical"
              name="register_agency"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              validateTrigger="onBlur"
            >
              <Row gutter={24}>
                {/* Name */}
                <Col xs={24}>
                  <Form.Item
                    label="Họ và Tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập tên người đăng ký." },
                      { max: 50, message: "Tên không được quá 50 ký tự." }
                    ]}
                  >
                    <Input placeholder="Nhập tên người đăng ký" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* Address */}
                <Col xs={24}>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                      { required: true, message: "Vui lòng nhập địa chỉ." },
                      { max: 50, message: "Địa chỉ không được quá 50 ký tự." }
                    ]}
                  >
                    <Input placeholder="Nhập địa chỉ chi nhánh" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* City */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item
                    label="Tỉnh"
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn tỉnh thành.",
                      },
                    ]}>
                    <Select
                      value={selectedCity}
                      onChange={handleCityChange}
                      placeholder="Chọn tỉnh thành"
                      size="large"
                    >
                      {cityData.map((city) => (
                        <Select.Option key={city.Id} value={city.Name}>
                          {city.Name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* District */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item
                    label="Quận/Huyện"
                    name="district"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn quận huyện.",
                      },
                    ]}>
                    <Select
                      value={selectedDistrict}
                      onChange={handleDistrictChange}
                      placeholder="Chọn quận huyện"
                      size="large"
                    >
                      {districts.map((district) => (
                        <Select.Option key={district.Id} value={district.Name}>
                          {district.Name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                {/* Ward */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item
                    label="Phường/Xã"
                    name="ward"
                    rules={[
                      { required: true, message: "Vui lòng chọn tên phường, xã." },
                    ]}
                  >
                    <Select
                      placeholder="Chọn phường/xã"
                      size="large"
                      value={selectedWard}
                      onChange={handleWardChange}
                    >
                      {wards.map((ward) => (
                        <Select.Option key={ward.Id} value={ward.Name}>
                          {ward.Name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* Position Image URL */}
                <Col xs={24}>
                  <Form.Item
                    label="Hình ảnh vị trí chi nhánh"
                    name="positionImageURL"
                    rules={[
                      {
                        required: true,
                        message: "Please upload your position image!",
                      },
                    ]}
                  >
                    <Upload
                      name="positionImage"
                      listType="picture"
                      maxCount={1}
                      customRequest={handleUpload}
                    >
                      <Button icon={<UploadOutlined />}>Upload Image</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* Phone Number */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Điện thoại"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number."
                      },
                      {
                        pattern: /^0[0-9]{9}$/,
                        message: "Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số."
                      }
                    ]}
                  >
                    <Input placeholder="Nhập số điện thoại của bạn" size="large" />
                  </Form.Item>
                </Col>

                {/* Email */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Vui lòng nhập địa chỉ email." },
                      {
                        type: "email",
                        message: "Vui lòng nhập đúng định dạng địa chỉ email.",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your email" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  style={{ width: "100%", marginTop: "20px" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AgencyRegistration;
