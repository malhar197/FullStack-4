const calculate = (num) => {

	return new Promise((resolve,reject) => {
		if(num > 5){
			resolve();
		} else {
		reject();
	}
	});
};

calculate(500).then(() => {
	console.log('success!');
}).catch(() => {
	console.log("error");
});