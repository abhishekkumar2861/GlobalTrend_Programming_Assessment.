class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
    } else {
      console.log(`Key '${key}' does not exist in the HashMap.`);
    }
  }
}

const myHashMap = new HashMap();

myHashMap.put("apple", 5);
myHashMap.put("banana", 10);
myHashMap.put("cherry", 15);

// Getting values
console.log("Value for 'banana':", myHashMap.get("banana"));
console.log("Value for 'orange':", myHashMap.get("orange"));

myHashMap.remove("banana");
console.log("After removing 'banana':", myHashMap.get("banana"));
