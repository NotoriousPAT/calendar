app.Event = function (description, datefrom, dateto, reminder) {
  spec = spec || {};

  this.description = description;
  this.datefrom = datefrom;
  this.dateto = dateto;
  this.reminder = reminder;
};
