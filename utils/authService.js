import { ENV_API } from "./config";

export const login = async (data) => {
  try {
    const user = await fetch(ENV_API.apiUsers + "/api/auth", {
      method: "POST",
      body: JSON.stringify({ ...data }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5000/api/auth",
      },
    });
    const resUser = await user.json();
    return resUser;
  } catch (error) {
    console.log(error);
  }

  return resUser;
};

export const logOut = async (token) => {
  try {
    const user = await fetch(NUTRINA_API.apiUsers + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export function isAuthenticated() {
  const getCookie = document.cookie.split("=");
  const token = getCookie[1];

  // const user = localStorage.getItem("user");
  if (!token) {
    console.log("token invalid");
    // return res.status(401).json({ error: "invalid token" });
  }
  return token;
}
