import ContactUs from "../Pages/ContactUs/ContactUs";

import Home from "../Pages/Home/Home";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivacyPolicy from "../Pages/TermsConditions/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

export const routes = [
  {
    notLazy: true,
    path: "/",
    element: Home,
    role: "private",
    name: "Home",
    subRouting: false,
  },

  {
    notLazy: true,
    path: "/contact-us",
    element: ContactUs,
    role: "private",
    name: "Contact Us",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/terms-conditions",
    element: TermsConditions,
    role: "private",
    name: "TermsConditions",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/privacy-policy",
    element: PrivacyPolicy,
    role: "private",
    name: "PrivacyPolicy",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/register",
    element: Register,
    role: "private",
    name: "Register",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/login",
    element: Login,
    role: "private",
    name: "Login",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/forgot-password",
    element: ForgotPassword,
    role: "private",
    name: "ForgotPassword",
    subRouting: false,
  },
];
