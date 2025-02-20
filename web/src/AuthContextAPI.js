import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextAPI = ({ children }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupClose, setPopupClose] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        popupOpen,
        setPopupOpen,
        setPopupClose,
        popupClose,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextAPI;
