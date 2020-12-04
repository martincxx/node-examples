function convertHTML(str) {
  const specialChar = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    "\"": "&quot;"
  }
    return str.replace(/([&<>\"'])/g, match => specialChar[match]);

}

convertHTML("Dolce & Gabbana");
