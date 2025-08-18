## Task: Product Data Analysis

You are given an array of product objects representing items in an online store. Each product has properties: id, name, price, category, and rating.

const products = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.2 },
  { id: 3, name: "T-shirt", price: 25, category: "clothing", rating: 4.0 },
  { id: 4, name: "Shoes", price: 60, category: "clothing", rating: 3.8 },
  { id: 5, name: "Monitor", price: 300, category: "electronics", rating: 4.3 },
];

## Tasks

Use .map() to create a new array containing the product names in uppercase.

Use .filter() to get all products in the "electronics" category with a rating greater than 4.0.

Use .reduce() to calculate the total price of all products.

Use .find() to get the first product with a rating below 4.0.

Bonus challenge:
Combine .filter() and .map() to get a list of product names in the "clothing" category with a rating greater than or equal to 4.0, converted to lowercase.

## Output

Print the results of each task using console.log() for easy verification.