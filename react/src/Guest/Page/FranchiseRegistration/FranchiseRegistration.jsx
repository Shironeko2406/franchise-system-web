import React from "react";
import { Form, Input, Button, Row, Col, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

const FranchiseRegistration = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values: ", values);
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
              Franchise Registration
            </Title>
            <Form
              form={form}
              layout="vertical"
              name="customer_information"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={24}>
                {/* Name */}
                <Col xs={24}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Enter your name" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* Address */}
                <Col xs={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      { required: true, message: "Please input your address!" },
                    ]}
                  >
                    <Input placeholder="Enter your address" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* City */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item
                    label="City"
                    name="city"
                    rules={[
                      { required: true, message: "Please select your city!" },
                    ]}
                  >
                    <Input placeholder="Enter city" size="large" />
                  </Form.Item>
                </Col>

                {/* District */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item
                    label="District"
                    name="district"
                    rules={[
                      {
                        required: true,
                        message: "Please select your district!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter district" size="large" />
                  </Form.Item>
                </Col>

                {/* Ward */}
                <Col xs={24} sm={12} md={8}>
                  <Form.Item
                    label="Ward"
                    name="ward"
                    rules={[
                      { required: true, message: "Please select your ward!" },
                    ]}
                  >
                    <Input placeholder="Enter ward" size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                {/* Position Image URL */}
                <Col xs={24}>
                  <Form.Item
                    label="Position Image"
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
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your phone number" size="large" />
                  </Form.Item>
                </Col>

                {/* Email */}
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
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

export default FranchiseRegistration;
