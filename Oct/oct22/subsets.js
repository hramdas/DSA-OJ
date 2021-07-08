function Subset(n, cur, sub){
    if(sub.length == 0){
        console.log('')
    }
    if(sub.length > 0){
        console.log(sub.join(' '))
    }

    if(cur === n) return;

    for(var i=cur; i<n; i++){
        sub.push(i)
        Subset(n, i+1, sub)
        sub.pop()
    }
}

function runProgram(input) {
    n = +input.trim()
    sub = []
    Subset(n+1, 1, sub)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1`);
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
  