// // src/utils/auth.js
// export function setToken(token) {
//   localStorage.setItem("token", token);
// }
// export function getToken() {
//   return localStorage.getItem("token");
// }
// export function removeToken() {
//   localStorage.removeItem("token");
// }
// utils/auth.js
// // export const getToken = () => {
// //   return localStorage.getItem("authToken"); // ✅ same name used everywhere
// // };

// utils/auth.js
export const getToken = () => localStorage.getItem("authToken");
export const setToken = (token) => localStorage.setItem("authToken", token);
export const clearToken = () => localStorage.removeItem("authToken");
