//built-in-type : number, string, boolean, void, undefined, null 
var id;
var userId;
var firstName;
var lastName;
var fullName;
var isActive;
var data;
userId = 47;
firstName = "Maruf";
lastName = "Hossain";
isActive = true;
data = null;
fullName = firstName.concat(" ", lastName);
console.log("User ID: ".concat(userId, ", Name: ").concat(fullName, ", Active: ").concat(isActive, ", Data: ").concat(data));
