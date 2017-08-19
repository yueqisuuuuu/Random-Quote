var q = document.getElementById("quote");
var a = document.getElementById("author");
var fb = document.getElementById("fb");
var twitter = document.getElementById("twitter");
var quote, author;

window.onload = function(){
  getQuote();
}

function getQuote(){
  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(result) {
      author = result[0].title;
      quote = result[0].content;
      //remove extra <p>
      quote = quote.slice(3, -5);
      q.innerHTML = quote;
      a.innerHTML = "&mdash; &nbsp;" + author;
      var link_t = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " -- " + author);
      twitter.href = link_t;
      fb.href = "https://facebook.com/";
    },
    cache: false
  });
}
