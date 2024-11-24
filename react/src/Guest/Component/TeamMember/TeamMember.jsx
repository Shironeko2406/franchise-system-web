import React from "react";

// Step 1: Define the team member data
const teamMembers = [
  {
    id: 1,
    name: "Ngọc Duy",
    role: "Leader",
    imgSrc: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/398690983_1617843658625530_8402458394029741781_n.jpg?stp=cp6_dst-jpg_s206x206&_nc_cat=111&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=uiR4hJIS3H4Q7kNvgGbWpvR&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=A9ce_Xa5fwKLKbQTZuIps6P&oh=00_AYAdlRbNq6IGgQmvRHIXOdiGIjlytJpQCNmj0bxqM-m8eA&oe=670F1362",
    delay: "0.1s",
    socialLinks: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Việt Hoàng",
    role: "Member",
    imgSrc: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=IWRfkTwXmZgQ7kNvgH9bFYC&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AuPx4FIgCfe8dJHw2ijRUoI&oh=00_AYABOUhLSD_oKLBdyLP9geY4TW_N97hA4Puy6clKiEzIVQ&oe=6730ACFA",
    delay: "0.3s",
    socialLinks: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
    ],
  },
  {
    id: 3,
    name: "Lê Tín",
    role: "Member",
    imgSrc: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/150424015_238614411095738_1022873047607687662_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=mdV839QtKdIQ7kNvgHAMByy&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=AVfdi-b2WDF4Bpbel6hJf-9&oh=00_AYAUwqcihf6819QWQh-dSLJLyA6n4QNbW_w2pZU_jkVlXQ&oe=6730A8BF",
    delay: "0.5s",
    socialLinks: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
    ],
  },
  {
    id: 4,
    name: "Trung Hiếu",
    role: "Member",
    imgSrc: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/352800632_1718158735281941_3317771396889960595_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=tZb9n2U0mFoQ7kNvgHM2Drg&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=ApmMbPHpxlXZeyWOuxlEjgy&oh=00_AYBrEDJde9dXA_yDhoeIF1IQHzbjhWp49boe0aDtO8mJRw&oe=670F0A91",
    delay: "0.7s",
    socialLinks: [
      { icon: "fab fa-facebook-f", link: "#" },
      { icon: "fab fa-twitter", link: "#" },
      { icon: "fab fa-instagram", link: "#" },
    ],
  },
];

const TeamMember = () => {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4">
            Our Investa Company Dedicated Team Member
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Step 2: Use map to render team members */}
          {teamMembers.map((member) => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
              data-wow-delay={member.delay}
              key={member.id} // Ensure each child has a unique key
            >
              <div className="team-item rounded">
                <div className="team-img">
                  <img
                    src={member.imgSrc}
                    className="img-fluid w-100 rounded-top"
                    alt={member.name}
                  />
                  <div className="team-icon">
                    <a
                      className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                      href="#"
                    >
                      <i className="fas fa-share-alt" />
                    </a>
                    <div className="team-icon-share">
                      {/* Render social links dynamically */}
                      {member.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          className="btn btn-primary btn-sm-square text-white rounded-circle mb-3"
                          href={link.link}
                        >
                          <i className={link.icon} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="team-content bg-dark text-center rounded-bottom p-4">
                  <div className="team-content-inner rounded-bottom">
                    <h4 className="text-white">{member.name}</h4>
                    <p className="text-muted mb-0">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
