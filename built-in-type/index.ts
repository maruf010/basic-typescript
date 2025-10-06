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
fullName = firstName.concat(" ", lastName)


console.log(`User ID: ${userId}, Name: ${fullName}, Active: ${isActive}, Data: ${data}`);

