// app.router.route('events', function () {
//   app.show('event-list', { events: app.events });
// });


(function () {
  // When the url is #events
  app.router.route('events', eventListController);

  // When the url is empty (the default route)
  app.router.route('', eventListController);

  // The user list "controller" function
  function userListController () {
    app.show('event-list', { events: app.events });
  }
})();
