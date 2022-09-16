
/* javascript */
// envelope animation
window.onload = function(){
  var tl = new TimelineLite({delay: 1}),
    firstBg = document.querySelectorAll('.textFirst-bg'),
    secBg = document.querySelectorAll('.textSecond-bg'),
    word  = document.querySelectorAll('.textWord');

  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});

  document.querySelector('.restart').onclick = function() {tl.restart()};
}
