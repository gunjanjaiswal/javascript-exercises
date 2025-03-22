const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(item) {
	return item.reduce((total,arr)=>{
    return total+arr;
  },0)
};

const multiply = function(item) {
  return item.reduce((total,arr)=>{
    return total*arr;
  })
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  if(!a){
    return 1;
  }
  let fact=1;
  while(a){
    fact=fact*a;
    a--;
  }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
