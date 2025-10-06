var userId; //union type
userId = "047";
userId = 47;
userId = true;
function displayUserInfo(userId) {
    console.log(userId);
}
displayUserInfo("123");
displayUserInfo(123);
displayUserInfo(2); // Error
