import React, { useRef } from 'react';
import MyNavbar from '../Component/Navbar/MyNavbar';
import MyFooter from '../Component/MyFooter/MyFooter';
import { Outlet } from 'react-router-dom';

const TempUIUser = () => {
  const footerRef = useRef(null);
  const viewCourseRef = useRef(null);

  return (
    <>
      <MyNavbar footerRef={footerRef} viewCourseRef={viewCourseRef}/>
      <Outlet context={{ viewCourseRef }}/>
      <MyFooter ref={footerRef} />
    </>
  );
};

export default TempUIUser;
