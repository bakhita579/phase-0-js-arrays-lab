// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct(){
  console.log(products[0]);
}
logFirstProduct(products);

function addProduct(productName){
  products.push(productName);
}
addProduct("Keyboard")
addProduct("mouse")
console.log(products);

function updateProductName(position, newName){
  products[position] = newName;

}
updateProductName(1, "Smartphone");
console.log(products);

function removeLastProduct(){
  products.pop([0])

}

removeLastProduct();
console.log(products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
