const { format } = require("date-fns");

const dateFormat = (date, dateFormat = "MMMM, yyyy") => {
  if (!date) {
    return "-";
  }
  if (date < 0) {
    return "-";
  }

  const dateObj = new Date(date);
  // Prints always passed date, regardless the time zone it executed in
  const dateOnly = new Date(
    dateObj.valueOf() + dateObj.getTimezoneOffset() * 60 * 1000
  );
  try {
    return format(dateOnly, dateFormat);
  } catch (e) {
    console.log(e.message, { date });
    return "-";
  }
};

module.exports = dateFormat;
