//declare and initialise variable Kelvin using 'const' as it will remain constant and will not be changed.
const Kelvin = 293;

// declarig celsius in terms of kelvin i.e. we convert kelvin into celsius as celsius=kelvin-273.
const Celsius =  Kelvin-273;

// we declare variable 'fahrenheit' using 'let' as it allows us to change it's value as needed.
let fahrenheit = Celsius*(9/5)+32;

//in case the fahrenheit value after conversion from celsius may be in decimal form, we use the .floor() method to round down the fahrenheit value.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//converting celsius to newton.
let newton = Celsius*(33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);