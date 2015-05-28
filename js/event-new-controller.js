app.router.route('events/new', function () {

  // Render the view
  app.show('event-new');

  // Bind our events
  $('.event-form').on('submit', function (e) {
    e.preventDefault();

    var event = new app.User(
      $('input[name=id]').val(),
      $('input[name=name]').val(),
      $('input[name=email]').val()
    );

    app.events.add(event);

    document.location = '#events';

  });

});
