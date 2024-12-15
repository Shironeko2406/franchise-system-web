import React, { useRef, useState } from "react";
import FormFranchise from "../../Component/FormFranchise/FormFranchise";
import BookCourse from "../../Component/BannerBookingCourse/BookCourse";
import AboutUs from "../../Component/AboutUs/AboutUs";
import OurService from "../../Component/OurService/OurService";
import PackagesTicket from "../../Component/PackagesTicket/PackagesTicket";
import Achievement from "../../Component/Achievement/Achievement";
import Post from "../../Component/Post/Post";
import TeamMember from "../../Component/TeamMember/TeamMember";
import TopFeedback from "../../Component/TopFeedback/TopFeedback";
import Article from "../../Component/Article/Article";
import Course from "../../Component/Course/Course";
import ViewCourse from "../../Component/ViewCourse/ViewCourse";

const HomePage = () => {
  const [selectedCourseId, setSelectedCourseId] = useState(""); // Lưu ID khóa học được chọn

  const handleRegisterNow = (courseId) => {
    setSelectedCourseId(courseId); // Cập nhật ID khóa học được chọn
    window.scrollTo({top: 0,behavior: "smooth"});
  };

  return (
    <>
      {/* <FormFranchise></FormFranchise> */}
      <BookCourse selectedCourseId={selectedCourseId}/>
      <Article/>
      <ViewCourse onRegisterNow={handleRegisterNow}/>
      <AboutUs/>
      <OurService/>
      {/* <PackagesTicket/> */}
      {/* <Course/> */}
      {/* <Achievement/> */}
      {/* <Post/> */}
      {/* <TopFeedback/> */}
    </>
  );
};

export default HomePage;
