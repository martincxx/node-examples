const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Who is Leeds United head coach?", (name) => {
  if (name.toLowerCase() === "bielsa") {
    console.log(`That's correct, Bielsa is the right answer`);
  } else {
    console.log("That is not correct");
  }
});
