function frankenSplice(arr1,arr2,index){
 const arr1_copy = arr1.slice();
 const arr2_copy = arr2.slice();
 arr2_copy.splice(index,0,...arr1_copy);
 return arr2_copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))

console.log(frankenSplice([1, 2], ["a", "b"], 1))

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))

console.log(frankenSplice([1, 2, 3, 4], [], 0))

