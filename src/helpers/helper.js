import English from "../../translate/en.json";
import French from "../../translate/fr.json";
import Chinese from "../../translate/ch.json";

const locale = navigator.language;

// Function to check for valid email
export const isvalidEmail = (str) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
};

// functionm to check the password
export const isValidPassword = (str) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\\[\\\](){}?\\\\|,.<>;:!~*_@#$%^&+=\-`"\/]).{8,}$/;
  return passwordRegex.test(str);
};

//function to extract the initials
export const getInitials = (str, str1) => {
  const firstNameInitials = str ? str.charAt(0) : "";
  const lastNameInitials = str ? str1.charAt(0) : "";

  const initials = `${firstNameInitials}${lastNameInitials}`;

  return initials.toUpperCase();
};

//function copy to clipboard
export const copyTextToClipboard = async (text) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
};

//convert html to string
export const convertHtmlToPlainText = (html) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || "";
};

//handle locale

export const handleLocale = (locale) => {
  switch (locale) {
    case "en":
      return English;

    case "fr":
      return French;

    case "ch":
      return Chinese;
  }
};
