//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["Get"] = 3] = "Get";
    RequestType[RequestType["Delete"] = 5] = "Delete";
    RequestType[RequestType["Post"] = 6] = "Post";
    RequestType[RequestType["Put"] = 7] = "Put";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["Get"] = "GET";
    RequestType2["Delete"] = "DELETE";
    RequestType2["Post"] = "POST";
    RequestType2["Put"] = "PUT";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2.Post);
// console.log(RequestType2["Post"]);
// console.log(RequestType2.Delete);
// console.log(RequestType2["Delete"]);
//heterogeneous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["User"] = "Maruf";
    RequestType3[RequestType3["ID"] = 11] = "ID";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.User);
console.log(RequestType3.ID);
console.log(RequestType3["User"]);
console.log(RequestType3["ID"]);
