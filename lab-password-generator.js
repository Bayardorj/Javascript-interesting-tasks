function generatePassword(passLength){
 let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
 let returnValue = "";
 for(let i = 0; i < passLength;i++) {
   const randomIndex = Math.floor(Math.random() * charset.length);
   returnValue += charset[randomIndex];
 }
 return returnValue;
}
let password = generatePassword(8);
console.log("Generated password:" + password)

