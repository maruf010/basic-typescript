//mixed data - key,value

let user: [number, string];
user = [100, "maruf"];

user.push(102, "hossain");

console.log(user);
console.log(user[0]);


let userInfo: [number, string, boolean];
userInfo = [ 100, "Hossain", true];

console.log(userInfo);
console.log(userInfo[1]);

userInfo.push(101, "Maruf");
console.log(userInfo);