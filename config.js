// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: false,
  progress: false,
  history: true,
  center: false
  //theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  //transition: Reveal.getQueryHash().transition || 'default' // default/cube/page/concave/zoom/linear/fade/none
});
hljs.initHighlightingOnLoad();

//
(function(QRCode, location){
  // hack image style to get it inline
  var myqrcodelink = new QRCode("qrcodelink", {
    text: location.protocol + '//' + location.host + location.pathname,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.L
  });
  var _oDrawing = myqrcodelink._oDrawing;
  var _fSuccess = _oDrawing._fSuccess;
  _oDrawing._fSuccess = function(){
    _fSuccess.apply(this, arguments);
    this._elImage.style.display = "inline";
  };
})(QRCode, location);
