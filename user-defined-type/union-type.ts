let userId : (string | number | boolean);  //union type

userId = "047";
userId = 47;
userId = true;

function displayUserInfo(userId: string | number ) {
    console.log(userId);
}

displayUserInfo("123");
displayUserInfo(123);
displayUserInfo( 2 ); // Error
