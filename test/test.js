import StorageManager from "../src/index.js";


// Usage example:

// Create an instance for localStorage or sessionStorage
const myStorage = new StorageManager('localStorage');  // or 'sessionStorage'

// Listen for changes
myStorage.on('change', () => {
    console.log('Storage changed!');
});

// Set a value
myStorage.setItem('user', { name: 'John', age: 30 });

// Get the value
const user = myStorage.getItem('user');
console.log(user);  // { name: 'John', age: 30 }

// Remove an item
myStorage.removeItem('user');

// Clear all
myStorage.clear();
