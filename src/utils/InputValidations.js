export const validateEmail = (checkingText) => {
  if(checkingText===""){
    return {
        isInputValid: false,
        errorMessage: "Email Address is required",
      };
  }
  const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regexp.exec(checkingText) !== null) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: "Invalid Email Address",
    };
  }
};

// It should be ten characters long.
// The first five characters should be any upper case alphabets.
// The next four-characters should be any number from 0 to 9.
// The last character should be any upper case alphabet.
// It should not contain any white spaces.
export const validatePan = (checkingText) => {
  let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
  if (checkingText === null || checkingText === "") {
    return {
      isInputValid: false,
      errorMessage: "Pan Number is required",
    };
  }
  if (regex.test(checkingText) === true) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: "Invalid Pan Number",
    };
  }
};
export const validateName = (checkingText) => {
  const reg=/^[a-zA-Z ]+$/;
  if (checkingText === null || checkingText === "") {
    return {
      isInputValid: false,
      errorMessage: "Name is required",
    };
  }
  if (reg.exec(checkingText)!==null && checkingText.length >= 3) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: "Invalid Name",
    };
  }
};
//between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
export const validatePass = (checkingText) => {
  if(checkingText===""){
    return {
        isInputValid: false,
        errorMessage: "Password Required",
      };
  }
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (decimal.test(checkingText)) {
    return {
      isInputValid: true,
      errorMessage: "",
    };
  } else {
    return {
      isInputValid: false,
      errorMessage: "Invalid Password",
    };
  }
};
