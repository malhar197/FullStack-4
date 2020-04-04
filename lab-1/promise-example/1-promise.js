
const mixedNumbers = [1,2,5,10,4,200];

const filterNumbers = (array) => {

	return new Promise((resolve, reject) => {
		let result = array.filter((num) => num > 5);

		resolve(result);
	});
};

const greeter = () => {
	console.log('hello!');
};


filterNumbers(mixedNumbers)
	.then(function(data){
		greeter(data);
	})
	.catch();