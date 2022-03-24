function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }
var Data = [3,6,1,4,5,2,7];
var b = Data.sort(sortfunction); //resultado: [1, 3, 3, 5, 7, 9, 10]

console.log(b)
console.log(b[b.length - 1])