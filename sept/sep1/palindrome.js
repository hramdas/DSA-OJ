function runProgram(input) {
    arr = input.trim().split(''); 
    N = arr.length;

    l = 0;
    r = N-1

    if (N==1){
        console.log('Yes')
    }

    while (l < r) {
        if (N!==1 && arr[l] !== arr[r]) {
            console.log('No')
            break;
            l++, r--
        } else {
            console.log('Yes')
            break;
        }
    }
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
  