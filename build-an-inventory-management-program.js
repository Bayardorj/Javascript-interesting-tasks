const inventory = [];

function findProductIndex(productName) {
  const lowerName = productName.toLowerCase();
  const index = inventory.findIndex(element => element.name === lowerName)

  return index;
}

function addProduct({name: productName,quantity:productQuantity}){
  let found = false;
  const lowerName = productName.toLowerCase();
   for(let element of inventory){
   if (lowerName === element.name ) {
     element.quantity += productQuantity;
     console.log(`${lowerName} quantity updated`)
     found = true;
     break
   }
   }
   if(!found) {
     inventory.push({name:lowerName,quantity:productQuantity} )
     console.log(`${lowerName} added to inventory`) 
}
}

function removeProduct(productName,productQuantity){
  const lowerName = productName.toLowerCase();
  for(let i = 0; i < inventory.length;i++){
    const element = inventory[i];
    if (lowerName == element.name.toLowerCase() ) {
      if(element.quantity < productQuantity) {
          console.log(`Not enough ${lowerName} available, remaining pieces: ${element.quantity}`)
          return;
      } 
      element.quantity -=productQuantity;
      if(element.quantity == 0){ 
        inventory.splice(i,1);
      } else{
        console.log(`Remaining ${lowerName} pieces: ${element.quantity}`)
      }
      return;
    }
  }
    console.log(`${lowerName} not found`)
  }

console.log(findProductIndex("flour"))
console.log(findProductIndex("FloUr"))
console.log(addProduct({name: "FLOUR", quantity: 5}))
console.log(addProduct({name: "FLOUR", quantity: 5}))
