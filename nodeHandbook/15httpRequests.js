const http = require("http");
const https = require("https");
const { hostname } = require("os");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

/* server.listen(port, () => {
  console.log(`server running at http://${hostname}:${po}`);
}); */

//GET request
function createSimpleRequest() {
  const options = {
    hostname: "flaviocopes.com",
    port: 443,
    path: "/todos",
    method: "GET",
  };

  const req = http.request(options, (res) => {
    console.log(res.statusCode);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();
}

//POST request
function createSimplePost() {
  const data = JSON.stringify({ todo: "Buy the milk" });
  const postOptions = {
    hostname: "flaviocopes.com",
    port: 443,
    path: "/todos",
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      "Content-Length": data.length,
    },
  };

  const reqPost = https.request(postOptions, (res) => {
    console.log(res.statusCode);

    res.on("data", (d) => {
      process.stdout.write(d);
    });

    reqPost.on("error", (error) => {
      console.error(error);
    });
  });
  reqPost.write(data);
  reqPost.end();
}
createSimplePost();
