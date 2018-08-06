var fahr = prompt("Please enter the temperature in F");

var celsi = function(fahr) {
  return ((5*(fahr-32)/9));
};

alert(celsi(fahr));
