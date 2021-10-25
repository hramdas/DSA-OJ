function Ways(n){
    if(n<0) return 0
    if( n == 4) return 1
     else return 1 + Ways(n-4) //+ Ways(n-8)
}

function runProgram(input) {
    input = input.trim().split('\n')
    t = +input[0].trim()

    for(var i = 1; i<=t; i++){
        console.log(Ways(+input[i].trim()))
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    12`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  