import React from "react";

const blogPosts = [
  {
    imgSrc: "/img/blog-2.jpg",
    category: "Vacation",
    date: "August 19, 2025",
    title: "Why Children Don't Like Getting Out Of The Water",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur nam quidem porro sapiente, neque a quibusdam....",
  },
  {
    imgSrc: "/img/blog-3.jpg",
    category: "Insight",
    date: "August 19, 2025",
    title: "5 Ways To Enjoy Waterland This Spring Break",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur nam quidem porro sapiente, neque a quibusdam....",
  },
  {
    imgSrc: "/img/blog-1.jpg",
    category: "Insight",
    date: "August 19, 2025",
    title: "3 Tips for Your Family Spring Break at Amusement Park",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam aspernatur nam quidem porro sapiente, neque a quibusdam....",
  },
];

const Post = () => {
  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Bài Viết</h4>
          <h1 className="display-5 mb-4">Nhanh &amp; Mới Nhất</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.2 * (index + 1)}s`}
              key={index}
            >
              <div className="blog-item">
                <div className="blog-img">
                  <a href="#">
                    <img
                      src={post.imgSrc}
                      className="img-fluid w-100 rounded-top"
                      alt="Blog"
                    />
                  </a>
                  <div className="blog-category py-2 px-4">{post.category}</div>
                  <div className="blog-date">
                    <i className="fas fa-clock me-2" />
                    {post.date}
                  </div>
                </div>
                <div className="blog-content p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    {post.title}
                  </a>
                  <p className="mb-4">{post.description}</p>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Read More <i className="fas fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
