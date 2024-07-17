let obj = {};
let pdname = prompt("Product name");
let quantity = +prompt(`quantity`);
let price = +prompt(`price`);
let discount = +prompt(`discount %`);

function sum(obj){
if(discount !== 0 ){
  let sum = (quantity * price) * (1 - (discount * 0.01))
}
}

obj.name = pdname;
obj.quantity = quantity;
obj.price = price;
if (discount !== 0) {
  obj.discount = discount;
}
console.log('Object:',obj);
