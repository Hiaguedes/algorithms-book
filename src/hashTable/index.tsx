const ProductsTable = new Map<string, number>([
  ["maca", 4],
  ["ovo", 2],
  ["caju", 2],
  ["maca", 4.5],
]);

ProductsTable.set("uva", 3);

console.log(ProductsTable.get("maca"));
console.log(ProductsTable.get("ovo"));
console.log(ProductsTable.get("caju"));

console.log(ProductsTable.get("uva"));

console.log(ProductsTable.has("maca"));
console.log(ProductsTable.has("carne"));
console.log(ProductsTable.get("carne"));
ProductsTable.set("carne", 10);
console.log(ProductsTable.has("carne"));
