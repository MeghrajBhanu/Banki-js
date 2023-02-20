import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/auth";
import { clearMessage } from "../../redux/actions/message";
import { Link } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePan,
  validatePass,
} from "../../utils/InputValidations";

/**
 * Registartion component handles users registration
 * @returns {React.ReactElement}
 */
const Register = () => {
  /**
   * 1.Store and dispatcher
   **/
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  /**
   * 2.Component State
   **/
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

  /**
   * 3.functions for handling inputs and form submission
   **/
  const handleInputValidation = (event) => {
    if (event.target.name === "name") {
      const { isInputValid, errorMessage } = validateName(event.target.value);
      setISNameValid({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
      });
    }
    if (event.target.name === "email") {
      const { isInputValid, errorMessage } = validateEmail(event.target.value);
      setISEmailValid({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
      });
    }
    if (event.target.name === "pancard") {
      const { isInputValid, errorMessage } = validatePan(event.target.value);
      setISPanValid({
        isInputValid: isInputValid,
        errorMessage: errorMessage,
      });
    }
    if (event.target.name === "password") {
      const { isInputValid, errorMessage } = validatePass(event.target.value);
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

  /**
   * 4.Page onload code cleanup
   **/
  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  /**
   * 5.Actual content rendered on screen
   **/
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
                            aria-label="name"
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
                          style={{ marginLeft: "50px" }}
                        >
                          {isnameValid.errorMessage}
                        </div>
                      ) : null}
                      <div className="d-flex flex-row align-items-center mb-3">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            aria-label="email"
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
                          style={{ marginLeft: "50px" }}
                        >
                          {isEmailValid.errorMessage}
                        </div>
                      ) : null}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-solid fa-id-card fa-lg me-3 fa-fw "></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            aria-label="pancard"
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
                          style={{ marginLeft: "50px" }}
                        >
                          {isPanValid.errorMessage}
                        </div>
                      ) : null}

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i
                          className="fas fa-key fa-lg me-3 fa-fw "
                          data-coreui-toggle="tooltip"
                          data-coreui-html="true"
                          title="length: 8-15 characters ,
                                lowercase letter : atleat one, 
                                uppercase letter : atleat one,
                                numeric digit :atleat one,
                                special character : atleat one"
                        ></i>

                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            aria-label="password"
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
                          style={{ marginLeft: "50px" }}
                        >
                          {isPassValid.errorMessage}
                        </div>
                      ) : null}

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          name="Register"
                          aria-label="Register"
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
