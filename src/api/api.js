import axios from "axios";
import { toast } from "react-toastify";

// const getMyAccessToken = async (retry) => {
//   console.log("my");
//   const ud = JSON.parse(localStorage.getItem("authUserData"));
//   // const uid = JSON.parse(localStorage.getItem("uid"));
//   if (ud && ud.token && ud.uid) {
//     if (retry) {
//       const headers = {
//         "Content-Type": "application/json",
//         // authorization: ud.token,
//       };
//       try {
//         const res = await axios.get(
//           `${process.env.URL}/api/v1/user/generateToken/${ud.uid}`,
//           // `${mainUrl.mainUrl}/tokens/${ud.refreshToken}`,
//           { headers }
//         );
//         if (res?.data?.token) {
//           // store.dispatch(setToken(res.data));
//           const user = JSON.parse(localStorage.getItem("authUserData"));

//           localStorage.setItem(
//             "authUserData",
//             JSON.stringify({
//               ...user,
//               token: res?.data.token || "",
//             })
//           );

//           // window.location.reload();

//           // const userJwt = jwt_decode(res.data.token);

//           return res.data.token;
//         } else {
//           console.log("response else", res);
//           localStorage.clear();
//           // window.location.reload();
//           return "";
//         }
//       } catch (error) {
//         if (error?.response?.status === 401) {
//           console.log("catch error");
//           localStorage.clear();
//           // window.location.reload();
//           return "";
//         }
//       }
//     } else {
//       return ud.token;
//     }
//   } else {
//     localStorage.clear();
//     // window.location.reload();
//     // window.location.replace("/");
//     console.log("not found token");
//     return "";
//   }
// };
const checkForMsg = (type) => {
  const ud = JSON.parse(localStorage.getItem("authUserData"));

  if (type === "postWithoutToken") {
    return true;
  } else {
    if (ud && ud?.token) {
      return true;
    } else {
      return false;
    }
  }
};

export const api = async (
  endpoint,
  data,
  type,
  jwttoken = "",
  msg = "",
  urlChange = "",
  retry = true,
  doRefresh = false,
  hideMsg = false,
  susMsg = true
) => {
  let ERRORMSG = "Something went wrong!";
  let response = { data: {} };

  let baseURL;

  if (urlChange) {
    baseURL = urlChange;
    console.log("url");
  } else {
    baseURL = process.env.REACT_APP_API_ENDPOINT;
  }

  let token;

  if (jwttoken) {
    token = jwttoken;
  } else {
    // window.location.replace("/");
    // localStorage.clear();
    // const userData = JSON.parse(localStorage.getItem("authUserData"));
    // token = userData?.authToken;
    // if (type !== "postWithoutToken" && type !== "getWithoutToken") {
    //   console.log("else token");
    //   token = await getMyAccessToken(doRefresh);
    // }
  }
  let headers = { "Content-Type": "application/json" };

  try {
    switch (type) {
      case "post":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.post(
          `${baseURL}/${endpoint}`,
          { ...data },
          {
            headers,
          }
        );
        break;
      case "postWithoutToken":
        response = await axios.post(
          `${baseURL}/${endpoint}`,
          { ...data },
          { headers }
        );
        break;
      case "postMultipart":
        headers["Content-Type"] = "multipart/form-data";
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.post(`${baseURL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "putMultipart":
        headers["Content-Type"] = "multipart/form-data";
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.put(`${baseURL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "get":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.get(`${baseURL}/${endpoint}`, {
          params: { ...data },
          headers,
        });
        break;
      case "getWithoutToken":
        response = await axios.get(`${baseURL}/${endpoint}`, {
          headers,
        });
        break;
      case "put":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.put(
          `${baseURL}/${endpoint}`,
          { ...data },
          {
            headers,
          }
        );
        break;
      case "patch":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.patch(`${baseURL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "patchMultipart":
        headers["Content-Type"] = "multipart/form-data";
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.patch(`${baseURL}/${endpoint}`, data, {
          headers,
        });
        break;
      case "delete":
        headers["authorization"] = `Bearer ${token}`;
        response = await axios.delete(`${baseURL}/${endpoint}`, {
          data,
          headers,
        });
        break;
      default:
        return true;
    }
    if ((susMsg && response.status === 200) || response.status === 201)
      response.data.success = true;
    if (type !== "get") {
      console.log(response);

      toast.success(msg || response.data.response);
    }
  } catch (error) {
    console.log("error");
    if (
      error &&
      error.response &&
      error.response.status === 401 &&
      retry === true
    ) {
      // localStorage.clear();
      // window.location.reload();
      // window.location.replace("/");
    } else {
      response.data.success = false;
      if (error && error.response) {
        if (!hideMsg && checkForMsg(type))
          toast.error(
            error.response?.data?.error ||
              error.response?.data?.message ||
              error.response?.data?.response ||
              ERRORMSG
          );
        if (error.response.status === 401 || error.response.status === 503) {
          // await store.dispatch(logout());
          localStorage.clear();
          // window.location.reload();
          response = error.response;
          console.log("401");
          if (response.data) response.data.success = false;
        } else {
          response = error.response;
          if (response.data) response.data.success = false;
        }
      } else {
        if (!hideMsg && checkForMsg(type)) toast.error(ERRORMSG);
      }
    }
  }

  return response?.data || response;
};
