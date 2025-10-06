function addNumber(a: number , b: number){
    return a + b;
}
console.log(addNumber(5,5));



function SubNumber(a: number , b: string){
    return a - Number(b);
}
console.log(SubNumber(5,"5"));



function multiNumber(a: string , b: number){
    return a === "true" ? b : 0;
}
console.log(multiNumber("true",5));
console.log(multiNumber("false",5));
