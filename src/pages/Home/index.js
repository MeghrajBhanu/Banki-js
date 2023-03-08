import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.jpg";
import classes from "./index.module.css";
import "aos/dist/aos.css";

/**
 * Home component is default page when user is not logged in
 *
 * @returns {React.ReactElement}
 */
const Home = () => {
  return (
    <>
      <div className={classes["first_container"]}>
        <img src={home} className={classes["image_flex"]} alt="landing"></img>

        <div className={classes["content"]}>
          <p className="lead-text text-center p-2 h5 mt-5">
            We are a services group focused on providing you
            <br />
            <br />
            with all your account details associated with different
            <br />
            <br />
            banks at a single point
          </p>
          <h6 className="text-center p-1">
            Don't have a account yet? <Link to="/register">Register</Link>
          </h6>
        </div>
      </div>

      <section
        id="services"
        className={`services ${classes["section-bg"]} mt-4`}
      >
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className={classes["section-header"]}>
            <h2 style={{ padding: "20px" }}>About Us</h2>
            <p>12Lakh+ customers use our website on daily basis.</p>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={`${classes["service-item"]}  position-relative`}>
                <div className={classes["icon"]}>
                  <i className="fa-solid fa-mountain-city"></i>
                </div>
                <h3>Centralizes Access</h3>
                <p className="h6">
                  We provide centralized access to all your bank accounts
                </p>
                
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={`${classes["service-item"]}  position-relative`}>
                <div className={classes["icon"]}>
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Data Security</h3>
                <p className="h6">
                  Keeping your private data safe is our priority.
                </p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={`${classes["service-item"]}  position-relative`}>
                <div className={classes["icon"]}>
                  <i className="fa-solid fa-compass-drafting"></i>
                </div>
                <h3>Leaders of Market</h3>
                <p className="h6">
                  We are a leading centralized service provider.
                </p>
                <a href="service-details.html" className="readmore stretched-link">
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={`${classes["service-item"]}  position-relative`}>
                <div className={classes["icon"]}>
                  <i className="fa-solid fa-trowel-bricks"></i>
                </div>
                <h3>User Friendly</h3>
                <p className="h6">
                  Our User Experience make us apart from all otherservice providers.
                </p>
                
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className={`${classes["service-item"]}  position-relative`}>
                <div className={classes["icon"]}>
                  <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3>Customer Obsession</h3>
                <p className="h6">
                We work vigorously to earn and keep our customers trust.
                </p>
               
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className={`${classes["service-item"]}  position-relative`}>
                <div className={classes["icon"]}>
                  <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                </div>
                <h3>Think Big</h3>
                <p className="h6">
                  We constantly raise our bars in every aspect.
                  Thinking small is a self-fulfilling prophecy
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${classes["contact"]} aos-init aos-animate`}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className={classes["overlay"]}>
          <div className={classes["container"]}>
            <div className={classes["row"]}>
              <div
                className="col-md-6 wow "
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className={classes["fadeInUp"]}>
                  <h2 className="text-uppercase mb-4">Contact Us</h2>
                  <p>
                    Got any sugesstions , requests , queries? Reach us out at
                    below address{" "}
                  </p>
                  <address>
                    <p>
                      <span className={classes["fa"]}>
                        <i className="fa fa-map-marker"></i>
                      </span>
                      Hyderabad, Telangana, India
                    </p>
                    <p>
                      <span className={classes["fa"]}>
                        <i className="fa fa-phone"></i>
                      </span>{" "}
                      0234 234234
                    </p>
                    <p>
                      <span className={classes["fa"]}>
                        <i className="fa fa-envelope"></i>
                      </span>{" "}
                      app@site.com
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <p>
              Copyright © 2023 Bhanu | Design: <Link to="/">Home</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Home;
