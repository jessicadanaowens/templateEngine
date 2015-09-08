var TemplateEngine = function (template, data) {
  var data = data;
  var template = template;
  var regex = /\$\{([^\}]+)?\}/g;
  var match;
  while( (match = regex.exec(template)) != null ) {
    template = template.replace(match[0], data[match[1]])
  }

  return template
};

var data = {"day": "Thursday", "name": "Jessica"};
var template = "${name} has an appointment on ${day}";

TemplateEngine(template, data);
