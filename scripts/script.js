window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "var(--black-color";
    document.getElementById("logo").style.height = "50px";
  } else {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.height = "45px";
  }
}