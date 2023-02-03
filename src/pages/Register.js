import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/auth";
import { clearMessage } from "../redux/actions/message";
// import { AuthState } from '../redux/reducers/types';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {
  validateEmail,
  validatePan,
  validatePass,
} from "../utils/InputValidations";
const Register = () => {
  const Navigate=useNavigate()
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);

  const [valuess, setValues] = useState({
    name: "",
    email: "",
    password: "",
    pancard: "",
  });
  const [disable, setDisable] = useState(true);
  const [isnameValid, setISNameValid] = useState({
    isInputValid: false,
    errorMessage: "",
  });
  const [isEmailValid, setISEmailValid] = useState({
    isInputValid: false,
    errorMessage: "",
  });
  const [isPanValid, setISPanValid] = useState({
    isInputValid: false,
    errorMessage: "",
  });
  const [isPassValid, setISPassValid] = useState({
    isInputValid: false,
    errorMessage: "",
  });

  const handleInputValidation = (event) => {
    if (event.target.name === "name") {
      const { isInputValid } = validatePass(valuess.name);
      setISNameValid({
        isInputValid: isInputValid,
        errorMessage: "Invalid Name",
      });
    }
    if (event.target.name === "email") {
      const { isInputValid, errorMessage } = validateEmail(valuess.email);
      setISEmailValid({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
      });
    }
    if (event.target.name === "pancard") {
      const { isInputValid, errorMessage } = validatePan(valuess.pancard);
      setISPanValid({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
      });
    }
    if (event.target.name === "password") {
      const { isInputValid, errorMessage } = validatePass(valuess.password);
      setISPassValid({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
      });
    }
    if (
      !isnameValid.isInputValid ||
      !isEmailValid.isInputValid ||
      !isPanValid.isInputValid ||
      !isPassValid.isInputValid
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const handleChange = (e) => {
    setValues({ ...valuess, [e.target.name]: e.target.value });
    handleInputValidation(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(valuess);
    dispatch(register(valuess))
      .then(() => {
        setSuccessful(true);
        setValues({
          name: "",
          email: "",
          password: "",
          pancard: "",
        });
      })
      .catch(() => {
        setSuccessful(false);
      });
    setDisable(true);
    setTimeout(() => {
      dispatch(clearMessage());
    }, 9000);
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Register
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw "></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            value={valuess.name}
                            id="form3Example1c"
                            className="form-control"
                            placeholder="Your Name"
                            onChange={handleChange}
                            onBlur={handleInputValidation}
                            required="required"
                          />
                        </div>
                      </div>
                      {!isnameValid.isInputValid ? (
                        <div
                          className="text-danger mb-3"
                          style={{ "margin-left": "50px" }}
                        >
                          {isnameValid.errorMessage}
                        </div>
                      ) : null}
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            value={valuess.email}
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Your Email"
                            onChange={handleChange}
                            onBlur={handleInputValidation}
                            required="required"
                          />
                        </div>
                      </div>
                      {!isEmailValid.isInputValid ? (
                        <div
                          className="text-danger mb-3"
                          style={{ "margin-left": "50px" }}
                        >
                          {isEmailValid.errorMessage}
                        </div>
                      ) : null}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-solid fa-id-card fa-lg me-3 fa-fw "></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="pancard"
                            value={valuess.pancard}
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Pancard"
                            onChange={handleChange}
                            onBlur={handleInputValidation}
                            required="required"
                          />
                        </div>
                      </div>
                      {!isPanValid.isInputValid ? (
                        <div
                          className="text-danger mb-3"
                          style={{ "margin-left": "50px" }}
                        >
                          {isPanValid.errorMessage}
                        </div>
                      ) : null}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                            value={valuess.password}
                            onChange={handleChange}
                            onBlur={handleInputValidation}
                            required="required"
                          />
                        </div>
                      </div>
                      {!isPassValid.isInputValid ? (
                        <div
                          className="text-danger mb-3"
                          style={{ "margin-left": "50px" }}
                        >
                          {isPassValid.errorMessage}
                        </div>
                      ) : null}

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                          onClick={onSubmit}
                          disabled={disable}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    {message && (
                      <div className="form-group">
                        <div
                          className={
                            successful
                              ? "alert alert-success"
                              : "alert alert-danger"
                          }
                          role="alert"
                        >
                          {message === "registartion done" ? (
                            <p>
                              Account has been registered
                              <br />
                              Please <Link to="/login">Login</Link> to continue

                            </p>
                          ) : (
                            message
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="a animated character walking"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
