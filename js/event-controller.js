app.router.route('events', function () {
  app.show('event-list', { events: app.events });
});
