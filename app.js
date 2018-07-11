
// instantiates a new object (library architecture does the 'new')
var g = G$('Phil', 'Tenteromano');

// chain both informal and formal greeting
g.greet().greet(true);

// just testing functions in console
g.setLang('es').greet().greet(true);

g.log();


// functionality of library with jquery
$('#login').click(function() {

  // assume we know name of user
  var loginGtr = G$('Phil', 'Tenteromano');

  // hide the button and options after click
  $('#logindiv').hide();

  // grab the option value, pass it to library
  // call HTMLgreeting on the H1 tag, log to console
  loginGtr.setLang($('#lang').val()).HTMLgreeting('#greeting', true).log();

});
