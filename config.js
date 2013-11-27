// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  dependencies: [

    // Interpret Markdown in <section> elements
    { src: '/bower_components/reveal.js/plugin/markdown/marked.js', condition: function() {
      return !!document.querySelector('[data-markdown]');
    } },
    { src: '/bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() {
      return !!document.querySelector('[data-markdown]');
    } },

    // Syntax highlight for <code> elements
    { src: '/bower_components/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() {
      hljs.initHighlightingOnLoad();
    } },

    // Zoom in and out with Alt+click
    { src: '/bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() {
      return !!document.body.classList;
    } },

    // Speaker notes
    { src: '/bower_components/reveal.js/plugin/notes/notes.js', async: true, condition: function() {
      return !!document.body.classList;
    } },

    // MathJax
    { src: '/bower_components/reveal.js/plugin/math/math.js', async: true }
  ],
  controls: true,
  progress: true,
  history: true,
  center: false
  //theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  //transition: Reveal.getQueryHash().transition || 'default' // default/cube/page/concave/zoom/linear/fade/none
});

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
