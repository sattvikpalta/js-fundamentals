const http = new easyHTTP;

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (posts) {
  console.log(err, posts);
});