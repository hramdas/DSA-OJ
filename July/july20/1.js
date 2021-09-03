function runProgram(input) {
    input = input.trim().split("\n")
    line1= input[0].trim().split(" ")
    row = line1[0]
    col = line1[1]

    arr = []
    for (var i=1; i<input.length; i++) {
        lines = input[i].trim().split(" ")
        arr.push(lines)
    }
        out = []
    for (var i=0; i<col; i++) {     
        for (var j=row-1; j>=0; j--) {
            out.push(arr[j][i])
        }  
    } console.log(out.join(" "))  
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`);
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
  