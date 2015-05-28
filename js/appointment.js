
// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

// Add the default route, which runs when the url is blank
router.route('', function () {
  show('<h1>Home</h1>'); // Assume we've written show or something...
});

// Add the books route which runs when the URL is #books
router.route('books', function () {
  show('<h1>Books</h1>');
});

// Note, this is a bug!!!
router.route('books/new', function () {
  show('<h1>New Book</h1>');
});

// Define a url that matches #books/anything
router.route('books/:id', function (bookId) {
  show('<h1>Show Book ' + bookId + '</h1>');
});

// Kick off our initial route
Backbone.history.loadUrl();
