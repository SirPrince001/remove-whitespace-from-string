module.exports = function removeSpaceFromString(string) {
  if (typeof string !== "string") throw new TypeError("please enter a string");
  return string.replace(/\s+/g).trim();
};
