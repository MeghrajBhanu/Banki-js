import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.jpg";
import classes from "./index.module.css";
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

        {/* <div className="container-fluid h-full " style={{ height: "100vh" }}>
        <img
          className=" container-fluid align-items-center"
          src={homeimage}
          style={{
            height: "100%",
            imageRendering: "-webkit-optimize-contrast",
          }}
          alt="managing people"
        ></img>

        <div className="h-full row w-100 align-items-center justify-content-center">
          <div className="col">
            <div className="row align-items-center">
              <div className="col-12 h3 text-center text-black mt-4">
                Welcome
              </div>

              <span className="lead-text text-center p-3 h5">
                We are a services group focused on providing customers{" "}
              </span>
              <br></br>
              <span className="lead-text text-center p-2 h5">
                with all there account details associated with different banks
                at a single point
              </span>
              <h6 className="text-center p-1">
                Don't have a account yet? <Link to="/register">Register</Link>
              </h6>
            </div>
          </div>
        </div>
        </div> */}
      </div>

      <section className={classes["sevices"]}>
        <h1 className={classes["text"]}>
          <em>Discover More About Us</em>
        </h1>
        <div className={classes["services_card"]}>
          <div className={classes["first_card"]}>
            <span className={classes["title"]}>
              <img src="https://w7.pngwing.com/pngs/303/653/png-transparent-emoticon-smiley-emoji-smiley-miscellaneous-stock-photography-smile.png" alt="user friendly" />
              <p className={classes["card-content"]}>User Friendly Website</p>
            </span>
          </div>
          <div className={classes["first_card"]}>
            <span className={classes["title"]}>
              <img src="https://i.pinimg.com/originals/6c/ab/18/6cab181e30143b581fd6570c99af98cb.jpg" alt="singledestination" />
              <p className={classes["card-content"]}>Saves your time</p>
              <small>single destination for your bank accounts</small>
            </span>
          </div>
          <div className={classes["first_card"]}>
            <span className={classes["title"]}>
              <img src="https://www.pngfind.com/pngs/m/45-450511_emoji-cool-png-you-rock-emoji-transparent-png.png" alt="security"></img>
              <p className={classes["card-content"]}>
                Security is our priority
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className={classes["contact"]}>
			<div className={classes["overlay"]}>
				<div className={classes["container"]}>
					<div className={classes["row"]}>
						<div className="col-md-6 wow " data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s",animationName: "fadeInUp"}}>
							<div className={classes["fadeInUp"]}>
              <h2 className="text-uppercase mb-4">Contact Us</h2>
							<p>Got any sugesstions , requests , queries? Reach us out at below address </p>
							<address>
								<p><span className={classes["fa"]}><i className="fa fa-map-marker"></i></span>Hyderabad, Telangana, India</p>
								<p><span className={classes["fa"]}><i class="fa fa-phone"></i></span> 0234 234234</p>
								<p><span className={classes["fa"]}><i class="fa fa-envelope"></i></span> app@site.com</p>
							</address>
              </div>
						</div>
					</div>
				</div>
			</div>
		</section>
    <footer>
			<div class="container">
				<div class="row">
					<p>Copyright © 2023 Bhanu | Design:  <Link to="/">Home</Link></p>
				</div>
			</div>
		</footer>
    </>
  );
};
export default Home;
