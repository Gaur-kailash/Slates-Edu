window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
  // document.getElementById("navbar").style.height="12vh";
  document.getElementById("navbar").style.padding="1rem 0";
  document.getElementById("navbar").style.boxShadow="0.5px 0.5px 10px 5px rgba(107, 107, 107, 0.314)";
  document.getElementById("navbar").style.zIndex="100";
}
}