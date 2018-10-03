var myVar;

function preloader() {
    myVar = setTimeout(showPage, 2500);
}

function showPage() {
  document.getElementById("preloader").remove();
  $("body").removeClass("preload");
  $(".content").fadeIn(3000);
  $("body").fadeIn(3000);
}

function loadPage(){
  $("body").removeClass("preload");
  $(".content").fadeIn(1000);
  $("body").fadeIn(1500);
}
