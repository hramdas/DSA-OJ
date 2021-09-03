function runProgram(input) {
    var input = input.trim();
    var N = input.length;
    var arr = 'abcdefghijklmnopqrstuvwxyz'

    out = 0
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < arr.length; j++) {
            if(input[i] == arr[j]){
            out = out + (j+1)
            break
        }
      }
    } console.log(out) 
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`abaabaabaaba`);
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
  