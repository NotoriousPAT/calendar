// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

// Add the default route, which runs when the url is blank
router.route('', function () {
 show('<h1>Home</h1>'); // Assume we've written show or something...
});

// Add the event route which runs when the URL is #events
router.route('events', function () {
 show('<h1>Add Event</h1>');
});

// Define a url that matches #event/anything
router.route('events/:id', function (bookId) {
 show('<h1>Show Event' + eventId + '</h1>');
});

// Kick off our initial route
Backbone.history.loadUrl();
