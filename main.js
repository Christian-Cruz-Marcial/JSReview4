//Christian Cruz Marcial
// excercise 1
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // this uses inbeded scope
		console.log(innerVar); // this just uses block scope
	}
    

	innerFunction();
}

outerFunction();

//excercise 2
function mainFunction() {
	hoistedFunction();
	function hoistedFunction(){
        console.log("Im Hoisted!")
    }
}

mainFunction();

//excercise 3
function closure(){
    const name = 'Christian'
    return function returnClosure(){
        console.log(name);
    }
}
//excercise 4
let globe = 'Earth';
modGlobe();
function modGlobe(){
	let globe = "Mars";
	console.log(globe);
}
changeGlobe();
function changeGlobe(){
	let local = 1;
	// let local = 5;
	console.log(local)
}

//excercise 5
function find(x){
	result = x*2;
	console.log(result)
}
find(6);

//excercise 6
function hoistTest(){
	let Paladin = "Chad";
	console.log(Paladin);
	//let Paladin = "sucks"
}
hoistTest();

//excercise 7
function counter(x){
	return function countUp(){
		let y = ++x;
		console.log(y)
		
	}
}
const End = counter(0);
End();
End();
End();
End();

//excercise 8
function count(num){
	let count = num;
	return function(){
		const incr = ++count;
		if (incr >= 5){
			console.log('tired of counting now')
		} else {
			console.log(incr);
		}
	}
}
let lazyCount = count();
lazyCount();
lazyCount();
lazyCount();
//excercise 9
function CarFactory(cars){
	let kia = cars;
	console.log(kia)
	return function(bike){
		let kia = bike;
		console.log(kia);
	}
}
CarFactory();