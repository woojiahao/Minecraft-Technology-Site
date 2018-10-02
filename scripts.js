var myVar;

function preloader() {
    myVar = setTimeout(showPage, 1500);
}
function showPage() {
  document.getElementById("preloader").remove();

  $(".content").fadeIn(3000);
}
