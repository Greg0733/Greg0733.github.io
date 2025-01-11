function findGetParameter(parameterName) {
  let result = null;
  let tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

let page = findGetParameter("annonce");
let a_html = document.querySelector("#" + page);
if (a_html == null) {
  document.querySelector("body").style.visibility = "visible";
} else {
  window.location.replace(a_html.href);
}