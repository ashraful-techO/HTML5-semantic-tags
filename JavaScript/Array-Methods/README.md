# JavaScript Array Methods Practice

Welcome to this simple practice project where I worked with JavaScript array methods like `map`, `filter`, `reduce`, and `find` to analyze product data.

---

## Product Data

```js
const products = [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.2 },
  { id: 3, name: "T-shirt", price: 25, category: "clothing", rating: 4.0 },
  { id: 4, name: "Shoes", price: 60, category: "clothing", rating: 3.8 },
  { id: 5, name: "Monitor", price: 300, category: "electronics", rating: 4.3 },
];
```
## Outputs

<pre>
  <code>
    Uppercase Names: [ "LAPTOP", "PHONE", "T-SHIRT", "SHOES", "MONITOR" ]
    Filtered Electronics (rating > 4.0): [
  { id: 1, name: "Laptop", price: 1200, category: "electronics", rating: 4.5 },
  { id: 2, name: "Phone", price: 800, category: "electronics", rating: 4.2 },
  { id: 5, name: "Monitor", price: 300, category: "electronics", rating: 4.3 },
]

Total Price: 2385

First Low Rated Product (rating < 4.0): 
{ id: 4, name: "Shoes", price: 60, category: "clothing", rating: 3.8 }

Clothing Products (rating >= 4.0, lowercase names): ["t-shirt"]
</code>
</pre>

## Key Learnings

<ol type="I">
  <li>Utilized modern JavaScript arrow functions for brevity.</li>

<li>Used non-mutating array methods to ensure original data integrity.
</li>
<li>Demonstrated chaining methods for complex data transformations.</li>

<li>Practiced functional programming concepts in JavaScript.</li>
</ol>
