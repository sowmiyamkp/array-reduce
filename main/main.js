const numbers = [1, 2, 3, 4, 5];

let sumNum=numbers.reduce(function(x,y)
{
	return x+y*2;
	
},10)
console.log(sumNum);