// Function to check for valid email
export const isvalidEmail = (str) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
};

// functionm to check the password
export const isValidPassword = (str) => {
  const passwordRegex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\\[\\\](){}?\\\\|,.<>;:!~*_@#$%^&+=\-`"\/]).{8,}$/;
  return passwordRegex.test(str);
};

