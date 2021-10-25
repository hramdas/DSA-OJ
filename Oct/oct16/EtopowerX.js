function fact(n){
    if (n==0 || n==1) return 1
    else return (n * fact(n-1))
}

function power(x,n){
        //console.log(x, n)
    if( n == 1) return x
    else return 1 + (Math.pow(x, n)/fact(n)) + power(x-1, n-1)
    
}

function runProgram(input) {
    input = input.trim().split(' ').map(Number)
    x = input[0]
    n = input[1]
    
    //console.log(x, n)
    console.log(power(x, n) + .0000)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 2`);
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
  