import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";

import "./App.css";
import Routes from "./router/Routes";
import Cursor from "./Components/customCursor/Cursor";
import { useCallback, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import JoinNow from "./Components/JoinNow/JoinNow";
import AuthContextAPI from "./AuthContextAPI";
function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
      triggerOnce: false,
      threshold: 0.5,
    });
    wow.init();
  }, []);

  return (
    <>
      {/* <Cursor /> */}
      <AuthContextAPI>
        <ScrollToTop />
        <ToastContainer />
        <Routes />
        <JoinNow />
      </AuthContextAPI>
    </>
  );
}

export default App;
