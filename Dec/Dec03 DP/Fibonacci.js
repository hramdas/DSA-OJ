// function fib(n){

//     if(cache[n] !== -1){
//         return cache[n]
//     } else {
//         cache[n] = fib(n-1) + fib(n-2)
//         return cache[n]
//     }
// }

// function runProgram(input) {
//     var num = +input.trim()
//      cache = [0, 1,]
//     for(let i=2; i<=num; i++){
//         cache.push(-1)
//     }

//     fib(num)
//     console.log(cache[cache.length-1])
   
// }
  
// if (process.env.USERNAME === "hedga") {
//     runProgram(`5`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//     });
// }
  


var isPowerOfTwo = function(n) {
  power(n, 2)
};
function power(n, num){
  console.log(n, num)
  if(n == 1) return true
  // console.log(n, num)
  // if(n === num) return true
  // if(n < num) return false
  // if(n>num){
  //     power(n, num*2)
  // }
}

console.log(isPowerOfTwo(1))