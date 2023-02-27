import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";
import { useNavigate } from "react-router";
import { clearMessage } from "../../redux/actions/message";
import {
  validateEmail,
  validatePan,
  validatePass,
} from "../../utils/InputValidations";
import { Outlet } from "react-router-dom";
/**
 * Login component handles user Login
 *
 * @returns {React.ReactElement}
 */
const Login = () => {
  useEffect(() => {
    dispatch(clearMessage());
  }, []);
  const [valuess, setValues] = useState({
    email: "",
    password: "",
    pancard: "",
  });
  const [successful, setSuccessful] = useState(false);
  const handleChange = (e) => {
    setValues({ ...valuess, [e.target.name]: e.target.value });
    handleInputValidation(e);
  };
  const { message } = useSelector((state) => state.message);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [disable, setDisable] = useState(true);
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
      !isEmailValid.isInputValid ||
      !isPanValid.isInputValid ||
      !isPassValid.isInputValid
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login(valuess))
      .then((data) => {
        setSuccessful(true);

        navigate("/login/landing");
      })
      .catch(() => {
        setSuccessful(false);
      });
    setDisable(true);
  };
  return (
    <>
      {isLoggedIn && <Outlet />}
      {!isLoggedIn && (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login
                        </p>

                        <form className="mx-1 mx-md-4 ">
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
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>

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
                          {/* <small
                            id="passwordHelpBlock"
                            class="form-text text-muted"
                          >
                            Your password must be 8-20 characters long, contain
                            letters and numbers, and must not contain spaces,
                            special characters, or emoji.
                          </small> */}
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
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={onSubmit}
                              disabled={disable}
                            >
                              Login
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
                              {message}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Login;
