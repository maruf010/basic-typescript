//built-in-type : number, string, boolean, void, undefined, null

let id;
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActive: boolean;
let data: null;

userId = 47;
firstName = "Maruf";
lastName = "Hossain";
isActive = true;
data = null;

fullName = firstName.concat(" ", lastName);

console.log(
  `User ID: ${userId}, Name: ${fullName}, Active: ${isActive}, Data: ${data}`
);

console.log(fullName.split(""));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userId.toLowerCase()); code type error

function display(): void {          //by default return type is void
    console.log("Display Function");
}
display();
