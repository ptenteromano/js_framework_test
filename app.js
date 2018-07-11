var g = G$('Phil', 'Tenteromano');

// chain both informal and formal greeting
g.greet().greet(true);

g.setLang('es').greet().greet(true);

g.log();
