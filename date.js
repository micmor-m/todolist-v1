const getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
};

const getDay = function () {
  const today = new Date();
  const options = {
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
};

module.exports = { getDate, getDay };
