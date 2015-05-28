//this is standard backbone logic for templates.


app.show = function (templateId, model) {
  var templateHtml = $('#' + templateId).html();
  var templateFn = _.template(templateHtml, { variable: 'm' });
  var result = templateFn(model);

  $('.main').html(result);
};
