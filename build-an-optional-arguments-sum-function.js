function addTogether(num1, num2){
  // First step is to clarify whether first argument don't have number type
  if(typeof num1 !== "number") return undefined;

// Second step is to clarify whether 2 arguments are defined, and if yes, define whether second argument doesn't have number type
  if(arguments.length === 2) {
    if(typeof num2 !== "number") return undefined;
    return num1 + num2;
  };
  
  // The last step is  to clarify when there is one argument is given, returned function is called  
  return function(c){
  if(typeof c !== "number") return undefined;
    return num1 + c;
  };
}
console.log(addTogether(2, 3))
console.log(addTogether(23.4, 30))
console.log(addTogether(5)(7))
console.log(addTogether(2)([3]))
console.log(addTogether(5, undefined))
