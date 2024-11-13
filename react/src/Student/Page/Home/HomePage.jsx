import React from "react";
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
  return (
    <>
      {/* <FormFranchise></FormFranchise> */}
      <BookCourse/>
      <Article/>
      <ViewCourse/>
      <AboutUs/>
      <OurService/>
      {/* <PackagesTicket/> */}
      <Course/>
      {/* <Achievement/> */}
      {/* <Post/> */}
      <TopFeedback/>
    </>
  );
};

export default HomePage;
