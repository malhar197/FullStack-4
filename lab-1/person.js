
class Person {
	constructor(name,age){
		this.name = name;
		this.age =  age;
	}

	greet() {
		return `Hello, my name is ${this.name} and I am ${this.age}`;
	}

}

class Customer extends Person {
	constructor(name,age,balance) {
		
		super(name,age);

		this.balance = balance;
	}

	info() {
		return `${this.name} owes ${this.balance}`;
	}

	greet() {
		return `Hello, my name is ${this.name}, can I help you?`;
	}
}

const customer1 = new Customer('Kevin',28, 300);
console.log(customer1.greet());
console.log(customer1.info());