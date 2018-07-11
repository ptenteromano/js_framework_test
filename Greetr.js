// js framework to build JS skills

// IIFE - hides the code within the scope of the framework's closure
// immediately invoked function expression.. note (.., ..) at end
// semi-colon used to end a line from another file (safety net)
;(function (global, $) {

  // 'new's an object
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  }

  // objects used in method calls, hidden within scope of IIFE
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio Sesion'
  }

  // prototype holds methods -- saving memory space
  // all Greetr objects have access to these methods!
  // prototypes rock
  Greetr.prototype = {

    // 'this' always refers to calling object at runtime
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    // references supportedLangs array accessible within closure
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },

    // using [] syntx to access properties within the object
    // note the difference between function greeting and obj greetings
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    // see above
    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.fullName();
    },

    // chainable methods use
    // return 'this';
    greet: function(formal) {
      var msg;

      // if undefined or null, coerced to null
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to calling obj at execution time,
      // makes method chainable
      return this;
    },

    log: function() {
      // internet explorer only has 'console' when it is opened
      // this prevents error
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },

    setLang: function(lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLgreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded!';
      }
      if (!selector) {
        throw 'missing jQuery selector!';
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      // inject message into selected place in the DOM
      $(selector).html(msg);

      return this;

    }

  }; // end prototype

  // actual object created here, allowing us to 'new' an object without
  // actually calling 'new' everywhere
  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  }

  // point all .init object to library prototype functions
  // saves us from using the 'new' keyword
  Greetr.init.prototype = Greetr.prototype

  // attached to global object, also alias the name Greetr to G$
  global.Greetr = global.G$ = Greetr

// below, the IIFE is invoked and executed passing in these parameters
}(window, jQuery));
