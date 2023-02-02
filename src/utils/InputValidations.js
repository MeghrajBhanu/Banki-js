export const validateEmail = (checkingText) => {
    
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
   
    
    if (regexp.exec(checkingText) !== null) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Invalid Email Address'
            };
        }
}
export const validatePan = (checkingText) => {
    
    
    if (checkingText.length === 10) {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Invalid Pan Number'
            };
        }
}
export const validatePass = (checkingText) => {
    
    
    if (checkingText!=="") {
            return {
                isInputValid: true,
                errorMessage: ''
            };
        } else {
            return {
                isInputValid: false,
                errorMessage: 'Invalid Password'
            };
        }
}