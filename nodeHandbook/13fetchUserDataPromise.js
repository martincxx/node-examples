const { response } = require("express");
const fetch = require("node-fetch");
const URL = "https://api.github.com/users/github";
const getGithubUserData = () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((user) => fetch(`${URL}/${user.name}`))
    .then((userResponse) => userResponse.json());
};

getGithubUserData();

const getAsyncGithubUserData = async () => {
  const response = await fetch(URL);
  const user = await response.json();
  //const userData = await user.json();
  return user;
};

getAsyncGithubUserData();
