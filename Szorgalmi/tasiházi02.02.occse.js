var number = 0;
var finish = 20;

while (number < finish) {
	number++;

	if (number % 3 == 0 && number % 5 == 0) {
		console.log('FizzBuzz!');
	} else if (number % 3 == 0) {
		console.log('Fizz!');
	} else if (number % 5 == 0) {
		console.log('Buzz!');
	} else {
		console.log(number);
	}
}