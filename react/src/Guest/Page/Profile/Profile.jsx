// import React from "react";
// import { Row, Col, Avatar, Button, List, Typography, Space } from "antd";
// import {
//   LockOutlined,
//   EditOutlined,
//   NotificationOutlined,
//   BookOutlined,
//   TrophyOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons";
// import "./Profile.css"; // Import your CSS
// import {NavLink} from "react-router-dom"

// const { Text, Title } = Typography;

// const UserProfile = () => {
//   const userData = {
//     name: "Nguyễn Trung Hiếu",
//     email: "nthieu24062002@gmail.com",
//     birthDate: "24/06/2002",
//     phone: "0902451769",
//     japaneseLevel: "N3",
//     address: "Chưa có thông tin",
//     country: "Việt Nam",
//     profileImage: "https://someimageurl.com",
//   };

//   const profileDetails = [
//     { label: "Họ và Tên", value: userData.name },
//     { label: "Email", value: userData.email, icon: <LockOutlined /> },
//     { label: "Mật khẩu", value: "******" },
//     { label: "Ngày sinh", value: userData.birthDate },
//     { label: "Số điện thoại", value: userData.phone },
//     { label: "Trình độ tiếng Nhật", value: userData.japaneseLevel },
//     { label: "Địa chỉ", value: userData.address },
//     { label: "Quốc gia", value: userData.country },
//   ];

//   return (
//     <div className="container">
//       <Row
//         gutter={16}
//         style={{ padding: "20px", background: "#fff", minHeight: "100vh" }}
//       >
//         <Col xs={24} md={8} lg={6}>
//           <div className="avatar-container">
//             <Avatar size={128} src={userData.profileImage} className="avatar" />
//             <Button className="change-avatar-btn">Thay ảnh đại diện</Button>

//             <List
//               style={{ marginTop: "30px", textAlign: "left" }}
//               dataSource={[
//                 {
//                   label: "Thông tin cá nhân",
//                   icon: <LockOutlined />,
//                   link: "#",
//                 },
//                 {
//                   label: "Thông báo",
//                   icon: <NotificationOutlined />,
//                   link: "#",
//                 },
//                 {
//                   label: "Khóa học của tôi",
//                   icon: <BookOutlined />,
//                   link: "#",
//                 },
//                 {
//                   label: "Sự tiến bộ của tôi",
//                   icon: <TrophyOutlined />,
//                   link: "#",
//                 },
//                 { label: "Thành tích", icon: <TrophyOutlined />, link: "#" },
//                 {
//                   label: "Lịch sử thanh toán",
//                   icon: <FileTextOutlined />,
//                   link: "#",
//                 },
//               ]}
//               renderItem={(item) => (
//                 <List.Item>
//                   <Space>
//                     {item.icon}
//                     <NavLink to={item.link}>{item.label}</NavLink>
//                   </Space>
//                 </List.Item>
//               )}
//             />
//           </div>
//         </Col>

//         <Col xs={24} md={16} lg={18}>
//           <Title level={3} style={{ marginBottom: "20px" }}>
//             Thông tin cá nhân
//           </Title>
//           <div className="profile-details">
//             {profileDetails.map((item, index) => (
//               <div className="profile-item" key={index}>
//                 <div className="profile-label">
//                   <Text strong>{item.label}</Text>
//                 </div>
//                 <div className="profile-value">
//                   <Text>{item.value}</Text>
//                 </div>
//                 <Button type="link" icon={<EditOutlined />}>
//                   chỉnh sửa
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default UserProfile;

// import React, { useState } from "react";
// import { Row, Col, Avatar, Button, List, Typography, Space } from "antd";
// import {
//   LockOutlined,
//   EditOutlined,
//   NotificationOutlined,
//   BookOutlined,
//   TrophyOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons";
// import { NavLink } from "react-router-dom";
// import "./Profile.css"; // Import your CSS

// const { Text, Title } = Typography;

// const UserProfile = () => {
//   const [selectedItem, setSelectedItem] = useState(null); // State to track selected item

//   const userData = {
//     name: "Nguyễn Trung Hiếu",
//     email: "nthieu24062002@gmail.com",
//     birthDate: "24/06/2002",
//     phone: "0902451769",
//     japaneseLevel: "N3",
//     address: "Chưa có thông tin",
//     country: "Việt Nam",
//     profileImage: "https://someimageurl.com",
//   };

//   const profileDetails = [
//     { label: "Họ và Tên", value: userData.name },
//     { label: "Email", value: userData.email, icon: <LockOutlined /> },
//     { label: "Mật khẩu", value: "******" },
//     { label: "Ngày sinh", value: userData.birthDate },
//     { label: "Số điện thoại", value: userData.phone },
//     { label: "Trình độ tiếng Nhật", value: userData.japaneseLevel },
//     { label: "Địa chỉ", value: userData.address },
//     { label: "Quốc gia", value: userData.country },
//   ];

//   const menuItems = [
//     {
//       label: "Thông tin cá nhân",
//       icon: <LockOutlined />,
//       link: "#",
//     },
//     {
//       label: "Thông báo",
//       icon: <NotificationOutlined />,
//       link: "#",
//     },
//     {
//       label: "Khóa học của tôi",
//       icon: <BookOutlined />,
//       link: "#",
//     },
//     {
//       label: "Sự tiến bộ của tôi",
//       icon: <TrophyOutlined />,
//       link: "#",
//     },
//     { label: "Thành tích", icon: <TrophyOutlined />, link: "#" },
//     {
//       label: "Lịch sử thanh toán",
//       icon: <FileTextOutlined />,
//       link: "#",
//     },
//   ];

//   return (
//     <div className="container">
//       <Row
//         gutter={16}
//         style={{ padding: "20px", background: "#fff", minHeight: "100vh" }}
//       >
//         <Col xs={24} md={8} lg={6}>
//           <div className="avatar-container">
//             <Avatar size={128} src={userData.profileImage} className="avatar" />
//             <Button className="change-avatar-btn">Thay ảnh đại diện</Button>

//             <List
//               style={{ marginTop: "30px", textAlign: "left" }}
//               dataSource={menuItems}
//               renderItem={(item, index) => (
//                 <List.Item
//                   key={index}
//                 >
//                   <Space>
//                     {item.icon}
//                     <NavLink to={item.link}>
//                       {item.label}
//                     </NavLink>
//                   </Space>
//                 </List.Item>
//               )}
//             />
//           </div>
//         </Col>

//         <Col xs={24} md={16} lg={18}>
//           <Title level={3} style={{ marginBottom: "20px" }}>
//             Thông tin cá nhân
//           </Title>
//           <div className="profile-details">
//             {profileDetails.map((item, index) => (
//               <div className="profile-item" key={index}>
//                 <div className="profile-label">
//                   <Text strong>{item.label}</Text>
//                 </div>
//                 <div className="profile-value">
//                   <Text>{item.value}</Text>
//                 </div>
//                 <Button type="link" icon={<EditOutlined />}>
//                   chỉnh sửa
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default UserProfile;

import React from "react";
import { Row, Col, Avatar, Button, Menu, Typography } from "antd";
import {
  LockOutlined,
  EditOutlined,
  BookOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Profile.css"; // Import your CSS

const { Text, Title } = Typography;

const UserProfile = () => {

  const userData = {
    name: "Nguyễn Trung Hiếu",
    email: "nthieu24062002@gmail.com",
    birthDate: "24/06/2002",
    phone: "0902451769",
    japaneseLevel: "N3",
    address: "Chưa có thông tin",
    country: "Việt Nam",
    profileImage: "https://someimageurl.com/avatar.jpg", // Link ảnh đại diện
  };

  const profileDetails = [
    { label: "Full name", value: userData.name },
    { label: "Email", value: userData.email, icon: <LockOutlined /> },
    { label: "Password", value: "******" },
    { label: "Date of birth", value: userData.birthDate },
    { label: "Phone", value: userData.phone },
    { label: "Address", value: userData.address },
    { label: "Country", value: userData.country },
  ];

  const menuItems = [
    {
      key: "sub1",
      label: "Personal information",
      icon: <UserOutlined></UserOutlined>,
    },
    {
      key: "sub2",
      label: "My course",
      icon: <BookOutlined></BookOutlined>,
    },
    {
      key: "sub3",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="container">
      <Row
        gutter={16}
        style={{ padding: "20px", background: "#fff", minHeight: "70vh" }}
      >
        <Col xs={24} md={8} lg={6} className="menu-column">
          {/* Phần Avatar và Nút cập nhật ảnh */}
          <div
            className="avatar-section"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Avatar size={140} src={userData.profileImage} />
            <Button type="primary" style={{ marginTop: "10px" }}>
              Update avatar
            </Button>
          </div>

          {/* Phần Menu */}
          <Menu
            onClick={onClick}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={menuItems}
          />
        </Col>

        <Col xs={24} md={16} lg={18}>
          <Title level={3} style={{ marginBottom: "20px" }}>
            Personal information
          </Title>
          <div className="profile-details">
            {profileDetails.map((item, index) => (
              <div className="profile-item" key={index}>
                <div className="profile-label">
                  <Text strong>{item.label}</Text>
                </div>
                <div className="profile-value">
                  <Text>{item.value}</Text>
                </div>
                <Button type="link" icon={<EditOutlined />}>
                  chỉnh sửa
                </Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
