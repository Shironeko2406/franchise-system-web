import React from "react";

const Achievement = () => {
  return (
    <div className="container-fluid gallery pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Gallery</h4>
          <h1 className="display-5 mb-4">Captured Moments In Waterland</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="gallery-item">
              <img
                src="/img/gallery-1.jpg"
                className="img-fluid rounded w-100 h-100"
                alt
              />
              <div className="search-icon">
                <a
                  href="img/gallery-1.jpg"
                  className="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-1"
                >
                  <i className="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
            <div className="gallery-item">
              <img
                src="/img/gallery-2.jpg"
                className="img-fluid rounded w-100 h-100"
                alt
              />
              <div className="search-icon">
                <a
                  href="img/gallery-2.jpg"
                  className="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-2"
                >
                  <i className="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
            <div className="gallery-item">
              <img
                src="/img/gallery-3.jpg"
                className="img-fluid rounded w-100 h-100"
                alt
              />
              <div className="search-icon">
                <a
                  href="img/gallery-3.jpg"
                  className="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-3"
                >
                  <i className="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
            <div className="gallery-item">
              <img
                src="/img/gallery-4.jpg"
                className="img-fluid rounded w-100 h-100"
                alt
              />
              <div className="search-icon">
                <a
                  href="img/gallery-4.jpg"
                  className="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-4"
                >
                  <i className="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
            <div className="gallery-item">
              <img
                src="/img/gallery-5.jpg"
                className="img-fluid rounded w-100 h-100"
                alt
              />
              <div className="search-icon">
                <a
                  href="img/gallery-5.jpg"
                  className="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-5"
                >
                  <i className="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="gallery-item">
              <img
                src="/img/gallery-6.jpg"
                className="img-fluid rounded w-100 h-100"
                alt
              />
              <div className="search-icon">
                <a
                  href="img/gallery-6.jpg"
                  className="btn btn-light btn-lg-square rounded-circle"
                  data-lightbox="Gallery-6"
                >
                  <i className="fas fa-search-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
