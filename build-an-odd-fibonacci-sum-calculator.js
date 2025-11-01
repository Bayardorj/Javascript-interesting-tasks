// task "Odd fibonacci sum calculator"
function sumFibs(num){
  let sum = 0;
 let a = 0;
 let b = 1;

 while(b<=num){
   if(b%2!==0){
     sum += b;
   }
   let next = a + b;
   a = b;
   b = next;
 }
 return sum;

}
console.log(sumFibs(1))
console.log(sumFibs(1000))
console.log(sumFibs(4000000))
console.log(sumFibs(4))
console.log(sumFibs(75024))

