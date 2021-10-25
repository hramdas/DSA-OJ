function nickHack(n, curr){
    if (n == curr) return 'Yes'
    if(curr>n) return 'No'
    // else if (n%10 == 0 || n%20 == 0) return 'Yes'
    // else return 'No'

    if( nickHack(n, 10*curr) == 'Yes' || nickHack(n, 20*curr) == 'Yes') return 'Yes'
    else return 'No'
}

function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    n = input[0]
    for(var i=1; i<=n; i++){
        
        console.log(nickHack(input[i], 1))
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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
  