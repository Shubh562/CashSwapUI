export const formatCurrency = (amount) => {
  return "$ " + amount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export const formatDate = (dateString, time= false) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  var hr = date.getHours();
  const min = date.getMinutes();
  var mode = "AM";
  if (hr > 12) {
    hr = hr % 12;
    mode = "PM";
  }
  return `${month} ${day}, ${year}` +(time ? ` ${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')} ${mode}` : '');
}

export const getTransformedStatusText = (str) => {
  return str.toLowerCase().replace(/(^|_)([a-z])/g, function(match, p1, p2) {
    return (p1 ? ' ' : '') + p2.toUpperCase();
  });
}