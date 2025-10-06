//numeric enum
enum RequestType {
  Get = 3,
  Delete = 5,
  Post,
  Put,
}
// console.log(RequestType);


//string enum
enum RequestType2 {
  Get = "GET",
  Delete = "DELETE",
  Post = "POST",
  Put = "PUT",
}
// console.log(RequestType2);
// console.log(RequestType2.Post);
// console.log(RequestType2["Post"]);
// console.log(RequestType2.Delete);
// console.log(RequestType2["Delete"]);


//heterogeneous enum
enum RequestType3{
    User = "Maruf",
    ID = 11
}
console.log(RequestType3.User);
console.log(RequestType3.ID);
console.log(RequestType3["User"]);
console.log(RequestType3["ID"]);