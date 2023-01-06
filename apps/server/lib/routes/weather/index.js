"use strict";
// const { default: axios } = require("axios");
// async function makeRequest(url, access_token) {
//   const config = {
//     method: "get",
//     url: url,
//     headers: { Authorization: "Bearer " + access_token }
//   };
//   const res = await axios(config);
//   return res.data;
// }
// // This is the rootes for the Discord
// module.exports = function (app) {
//   let status = { status: "off" };
//   app.get("/weather/on", function (req, res) {
//     status = { status: "on" };
//     res.end();
//   });
//   app.get("/weather/off", function (req, res) {
//     status = { status: "off" };
//     res.end();
//   });
//   app.get("/weather/status", function (req, res) {
//     res.send(status);
//     res.end();
//   });
//   app.get("/weather/get", async function (req, res) {
//     if (status.status == "on") {
//       const result = await makeRequest(
//         "https://api.meteo-concept.com/api/forecast/daily?latlng=48.5713%2C7.7675&insee=67482&world=true&start=0&end=0",
//         "620f2ed5430a01e81271994875996e702218c6d18eddae269efe65c7adab4112"
//       );
//       res.send(result);
//     } else {
//       res.send("service offline");
//     }
//   });
// };
//# sourceMappingURL=index.js.map