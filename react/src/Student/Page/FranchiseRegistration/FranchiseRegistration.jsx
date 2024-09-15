import React from 'react';
import { Form, Input, Button, Row, Col, Select } from 'antd';

const { Option } = Select;

const FranchiseRegistration = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values: ', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ backgroundColor: '#ecedf3', minHeight: '100vh', padding: '50px 0' }}>
      <Row justify="center">
        <Col span={12}>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2>Franchise Registration</h2>
            <Form
              form={form}
              layout="vertical"
              name="franchise_registration"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={16}>
                {/* Full Name */}
                <Col span={12}>
                  <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                  >
                    <Input placeholder="Enter your full name" />
                  </Form.Item>
                </Col>

                {/* Email */}
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Please input your email!' },
                      { type: 'email', message: 'The input is not valid E-mail!' },
                    ]}
                  >
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Phone */}
                <Col span={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input placeholder="Enter your phone number" />
                  </Form.Item>
                </Col>

                {/* Position */}
                <Col span={12}>
                  <Form.Item
                    label="Position"
                    name="position"
                    rules={[{ required: true, message: 'Please select your position!' }]}
                  >
                    <Select placeholder="Select your position">
                      <Option value="manager">Manager</Option>
                      <Option value="owner">Owner</Option>
                      <Option value="investor">Investor</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Industry */}
                <Col span={12}>
                  <Form.Item
                    label="Industry"
                    name="industry"
                    rules={[{ required: true, message: 'Please select your industry!' }]}
                  >
                    <Select placeholder="Select your industry">
                      <Option value="food">Food & Beverage</Option>
                      <Option value="retail">Retail</Option>
                      <Option value="service">Service</Option>
                      <Option value="education">Education</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* Business Experience */}
                <Col span={12}>
                  <Form.Item
                    label="Business Experience"
                    name="businessExperience"
                    rules={[{ required: true, message: 'Please input your business experience!' }]}
                  >
                    <Input placeholder="Describe your business experience" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Finance */}
                <Col span={12}>
                  <Form.Item
                    label="Finance"
                    name="finance"
                    rules={[{ required: true, message: 'Please input your available finance!' }]}
                  >
                    <Input placeholder="Enter your available finance" />
                  </Form.Item>
                </Col>

                {/* Human Resources */}
                <Col span={12}>
                  <Form.Item
                    label="Human Resources"
                    name="humanResources"
                    rules={[{ required: true, message: 'Please input your human resources capabilities!' }]}
                  >
                    <Input placeholder="Describe your human resources capabilities" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                {/* Business Time */}
                <Col span={12}>
                  <Form.Item
                    label="Business Time"
                    name="businessTime"
                    rules={[{ required: true, message: 'Please input your business time!' }]}
                  >
                    <Input placeholder="Enter how long your business has been operational" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Submit Button */}
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
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
