import Faq from "../Components/faq/FAQPage";
import SupportPage from "../Components/SupportChat/SupportChat";
import AboutPage from "../Pages/About/AboutPage";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import CommingSoon from "../Pages/CommingSoon/CommingSoon";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Courses from "../Pages/Courses/Courses";
import CoursesDetails from "../Pages/Courses/CoursesDetails";
import MyCourse from "../Pages/Courses/MyCourse";
import Single from "../Pages/Courses/Single";

import Home from "../Pages/Home/Home";
import CreatePassword from "../Pages/Login/CreatePassword";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import Login from "../Pages/Login/Login";
import Otp from "../Pages/Login/Otp";
import Register from "../Pages/Login/Register";
import ThankYou from "../Pages/Login/ThankYou";
import Mentor from "../Pages/Mentor/Mentor";
import PricingPlan from "../Pages/Pricing/PricingPlan";
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
    path: "/support",
    element: SupportPage,
    role: "private",
    name: "Support",
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
    path: "/pricing-plan",
    element: PricingPlan,
    role: "private",
    name: "Login",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/about-us",
    element: AboutPage,
    role: "private",
    name: "Login",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/mentor",
    element: Mentor,
    role: "private",
    name: "Mentor",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/courses",
    element: Courses,
    role: "private",
    name: "Mentor",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/faq",
    role: "private",
    element: Faq,
    name: "faq",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/courses/:name",
    element: CoursesDetails,
    role: "private",
    name: "courseSingle",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/my-course",
    element: MyCourse,
    role: "private",
    name: "MyCourse",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/single",
    element: Single,
    role: "private",
    name: "courseSingle",
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

  {
    notLazy: true,
    path: "/otp",
    element: Otp,
    role: "private",
    name: "otp",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/create-password",
    element: CreatePassword,
    role: "private",
    name: "create password",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/thank-you",
    element: ThankYou,
    role: "private",
    name: "Thank You",
    subRouting: false,
  },

  {
    notLazy: true,
    path: "/blog",
    element: Blog,
    role: "private",
    name: "Blog",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/blog/:name",
    element: SingleBlog,
    role: "private",
    name: "Blog",
    subRouting: false,
  },
  {
    notLazy: true,
    path: "/comming-soon",
    element: CommingSoon,
    role: "private",
    name: "Blog",
    subRouting: false,
  },



  
];
