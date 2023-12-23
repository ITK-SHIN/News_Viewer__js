//Reflect.set(obj, prop, value)  -> obj[prop] = value

let user = {};

Reflect.set(user, "name", "John");

console.log(user.name); // John
