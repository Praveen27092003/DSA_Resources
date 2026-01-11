class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  // Hash function to calculate index
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  // Insert key-value pair
  set(key, value) {
    const index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]); // Chaining method
  }

  // Retrieve value by key
  get(key) {
    const index = this._hash(key);
    if (!this.table[index]) return undefined;

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  // Delete key-value pair
  remove(key) {
    const index = this._hash(key);
    if (!this.table[index]) return false;

    this.table[index] = this.table[index].filter(pair => pair[0] !== key);
  }

  // Display Hash Table
  display() {
    this.table.forEach((bucket, index) => {
      if (bucket) {
        console.log(index, bucket);
      }
    });
  }
}

// Example usage
const myHashTable = new HashTable();
myHashTable.set("apple", 10);
myHashTable.set("grape", 15);
myHashTable.set("banana", 25);
myHashTable.display();

console.log(myHashTable.get("banana")); // Output: 25
myHashTable.remove("banana");
console.log(myHashTable.get("banana")); // Output: undefined
