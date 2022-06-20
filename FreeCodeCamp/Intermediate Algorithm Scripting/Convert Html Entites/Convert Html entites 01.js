function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.split('').map(val => htmlEntities[val] || val).join('');
}

convertHTML("Dolce & Gabbana");