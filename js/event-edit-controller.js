app.router.route('events/:id', function (id) {

  var event = app.events.getById(id);

  // Render the view
  app.show('event-edit', event);

  // Bind our events
  $('.event-form').on('submit', function (e) {
    e.preventDefault();

    var editedEvent = new app.Event(
      $('input[description=description]').val(),
      $('input[datefrom=datefrom]').val(),
      $('input[dateto=dateto]').val()
      $('input[reminder=reminder]').val()
    );

    event.description = editedEvent.description;
    event.datefrom = editedEvent.datefrom;
    event.dateto = editedEvent.dateto;
    event.reminder = editedEvent.reminder;

    document.location = '#events';

  });

});
