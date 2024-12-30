// import React from 'react';

// const timelineItems = [
//   {
//     iconClass: "fas fa-code",
//     title: "Nền tảng lập trình",
//     description: "Học các ngôn ngữ cơ bản như HTML, CSS, và JavaScript. Hiểu về cấu trúc dữ liệu và giải thuật."
//   },
//   {
//     iconClass: "fas fa-database",
//     title: "Cơ sở dữ liệu",
//     description: "Tìm hiểu về cơ sở dữ liệu quan hệ (SQL) và phi quan hệ (NoSQL). Học cách thiết kế và tối ưu hóa cơ sở dữ liệu."
//   },
//   {
//     iconClass: "fas fa-server",
//     title: "Back-end Development",
//     description: "Học một framework back-end như Node.js/Express, Django, hoặc Ruby on Rails. Hiểu về API RESTful và GraphQL."
//   },
//   {
//     iconClass: "fas fa-globe",
//     title: "Front-end Development",
//     description: "Thành thạo một framework front-end như React, Vue, hoặc Angular. Học về state management và responsive design."
//   },
//   {
//     iconClass: "fas fa-mobile-alt",
//     title: "Phát triển ứng dụng di động",
//     description: "Học cách tạo ứng dụng di động đa nền tảng với React Native hoặc Flutter."
//   },
//   {
//     iconClass: "fas fa-cloud",
//     title: "DevOps và Cloud Computing",
//     description: "Hiểu về CI/CD, containerization với Docker, và cloud platforms như AWS hoặc Google Cloud."
//   }
// ];

// const TimeLineFullStack = () => {
//   return (
//     <div className="timeline-container">
//       <div className="timeline-content">
//         <div className="timeline-text-center">
//           <h6 className="timeline-section-title">
//             Lộ trình học
//           </h6>
//           <h1 className="timeline-main-title">Lộ trình trở thành lập trình viên Fullstack</h1>
//         </div>

//         <div className="timeline">
//           {timelineItems.map((item, index) => (
//             <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
//               <div className="timeline-item-content">
//                 <div className="timeline-icon-wrapper">
//                   <i className={`${item.iconClass} timeline-icon`}></i>
//                 </div>
//                 <h3 className="timeline-item-title">{item.title}</h3>
//                 <p className="timeline-item-description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeLineFullStack;



import React from 'react';

const timelineItems = [
  {
    iconClass: "fas fa-code",
    title: "Nền tảng lập trình",
    description: "Học các ngôn ngữ cơ bản như HTML, CSS, và JavaScript. Hiểu về cấu trúc dữ liệu và giải thuật."
  },
  {
    iconClass: "fas fa-database", 
    title: "Cơ sở dữ liệu",
    description: "Tìm hiểu về cơ sở dữ liệu quan hệ (SQL) và phi quan hệ (NoSQL). Học cách thiết kế và tối ưu hóa cơ sở dữ liệu."
  },
  {
    iconClass: "fas fa-server",
    title: "Back-end Development",
    description: "Học một framework back-end như Node.js/Express, Django, hoặc Ruby on Rails. Hiểu về API RESTful và GraphQL."
  },
  {
    iconClass: "fas fa-globe",
    title: "Front-end Development", 
    description: "Thành thạo một framework front-end như React, Vue, hoặc Angular. Học về state management và responsive design."
  },
  {
    iconClass: "fas fa-mobile-alt",
    title: "Phát triển ứng dụng di động",
    description: "Học cách tạo ứng dụng di động đa nền tảng với React Native hoặc Flutter."
  },
  {
    iconClass: "fas fa-cloud",
    title: "DevOps và Cloud Computing",
    description: "Hiểu về CI/CD, containerization với Docker, và cloud platforms như AWS hoặc Google Cloud."
  }
];

const TimeLineFullStack = () => {
  return (
    <div style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="section-title text-center text-primary px-3">
            Lộ trình học
          </h6>
          <h1 className="mb-4">Lộ trình trở thành lập trình viên Fullstack</h1>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <i className={item.iconClass}></i>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineFullStack;


