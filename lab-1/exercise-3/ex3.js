const makeUpperCase = (arr) => {
	
	return new Promise((resolve,reject) => {
		for(let i = 0; i < arr.length; i++){
			if(typeof(arr[i]) !== "string"){
				let error = 'Array must contain strings only';
				reject(error);
			}
			arr[i] = arr[i].toUpperCase();
		}
		let result = sortWords(arr);
		resolve(result);
	});
};

const sortWords = (arr) =>{
	return (arr.sort());
}

const arr = ['jaxx',3,'clay'];

makeUpperCase(arr)
.then(sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))