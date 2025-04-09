import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const parseUser = () => {
  try {
    const user = localStorage.getItem("authUserData");
    return (user && typeof user === "string" && JSON.parse(user)) || null;
  } catch (error) {
    return "test";
  }
};
const AuthContextAPI = ({ children }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupClose, setPopupClose] = useState(false);

  const [currUserData, setCurrUserData] = useState(() => {
    return parseUser();
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [currentPatient, setCurrentPatient] = useState("patientList");
  const [currentSidebar, setCurrentSidebar] = useState(true);

  useEffect(() => {
    const authUserData = parseUser();
    if (authUserData) {
      setCurrUserData(authUserData);
    }
  }, []);

  const userLogin = (userData) => {
    if (userData) {
      localStorage.setItem("authUserData", JSON.stringify(userData));
      setCurrUserData(userData);
    }
  };

  const userLogout = () => {
    localStorage.clear();
    setCurrUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        popupOpen,
        setPopupOpen,
        setPopupClose,
        popupClose,
        currUserData,
        doLogin: userLogin,
        doLogout: userLogout,
        currentStep,
        setCurrentStep,
        currentPatient,
        setCurrentPatient,
        currentSidebar,
        setCurrentSidebar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextAPI;
