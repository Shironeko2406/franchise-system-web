import React, { useState } from "react";
import { Button, Input, Modal, Form, Typography, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CreateConsultFranchiseActionAsync } from "../../Redux/ReducerAPI/ConsultationsReducer";

const { Title } = Typography;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .ant-modal-header {
    border-bottom: none;
    padding: 24px 24px 0;
  }
  .ant-modal-body {
    padding: 24px;
  }
  .ant-form-item-label > label {
    font-weight: 600;
  }
`;

const StyledForm = styled(Form)`
  .ant-input,
  .ant-input-number,
  .ant-picker,
  .ant-select-selector {
    border-radius: 6px;
  }
`;

const RegisInfoConsultModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    dispatch(CreateConsultFranchiseActionAsync(values)).then((res) => {
      setLoading(false)
      if (res) {
        onClose()
        form.resetFields()
      }
    }).catch((err)=>{
      setLoading(false)
      console.log(err)
    });
  };

  return (
    <StyledModal
      open={visible}
      title={<Title level={3}>Đăng ký tư vấn nhượng quyền</Title>}
      width={700}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose} disabled={loading}>
          Hủy
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => form.submit()}
          loading={loading}
        >
          Đăng ký
        </Button>,
      ]}
    >
      <StyledForm form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="customerName"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
        >
          <Input placeholder="Nhập họ và tên" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Số điện thoại"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại" },
            { pattern: /^[0-9]{10}$/, message: "Số điện thoại không hợp lệ" },
          ]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email" },
            { type: "email", message: "Email không hợp lệ" },
          ]}
        >
          <Input placeholder="Nhập email" />
        </Form.Item>
      </StyledForm>
    </StyledModal>
  );
};

export default RegisInfoConsultModal;
