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
    } else {
      setCurrUserData({
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZWNlMWE2MGU5ZDk3MDZmYjgxMjVmOCIsInJvbGUiOiJzdXBlcmFkbWluIiwiaWF0IjoxNzQzNTgxNTk4LCJleHAiOjE3NDM2MTc1OTh9.Qb8Wn-Rzlflx5cENdwKrPbM9VyTEqpPV-qrxjfo64DNVymzCAmqONaI0auYCDiUd8wLucF_0FixIqIEAh5fxZDLMPwIAr0zIMly-mejdsREAPqHM_Pl8J-G1L1KuH0VWx5HtvK95o9L0brHFxzHJZLWgHsTGkH93-bkGku-gsM8aSYGqIoyzej7Bi5vx73W-0bpyjFPV2CcQLTzc6t5UpUko8tCibZmvHwtyCV1CztK0MUqWkX2WprMOM1pxizpH_jw_tIg9M510mkEhKt3ydnfrBzKTkXgo3h2ivzhsWzZwVEo8eZkOt2eO6wSD0agwDxh0Ky5GHmRzASYw4L7Tfg",
      });
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
