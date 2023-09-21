//9/18/23
//excercise 1
function test(){
	console.log(this);
}

const food = {
	fruit: "apple",
	vegi: "corn",
	meat: "chicken",
	meal: function() {
		const arrowFuction = ()=>{
		console.log(this)
		console.log(this.fruit + ", " + this.vegi + ", " + this.meat)
		}
		arrowFuction();
	}
}
test();
food.meal()
//excercise 2
class person {
	constructor(name,age){
		this.name = name,
		this.age = age
	}
	greet(phrase){
		console.log(`${this.name} says:  ${phrase} ${this.age}`)
	}
	//excercise 4
	static info(){
		console.log('this is in the person class')
	}	
	//excercise 5
	get current(){
		return age;
	}
	set current(age){
		if ( age <= 0){
		console.log('negative number');
		} else {
		age = this.age;
		console.log(age);
		}
	}
}
//console.log(person.info)
//shows line 31 in console
const christian = new person('christian', 21);


//console.log(christian.info)
//prints undefined
const trez = new person('trez', 24);
trez.greet("Hi, im")
//excercise 3
const v = new person('V', 18);
v.greet('Hi, im')
const kayden = new person('Kayden', 17);
kayden.greet('Hi, im')

//excercise 7
class student{
	constructor(name, grade){
		this.name = name,
		this.grade = grade;
	}
	get average(){
		return grade
	}
	set average(grade){
		this.log.push(grade)
		const averageGrade = array => array.reduce((a, b) => a + b) / array.length;
		console.log(averageGrade);
	}
}
const jim = new student('jim', 89);
const tim = new student('tim', 95);
const kim = new student('kim', 76);