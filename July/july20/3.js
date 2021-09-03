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
    for (var a=0; a<arr.length; a++) {
    if (a%2==0){    
            for (j=col-1; j>=0; j--) {
                out.push(arr[a][j])
            }  
    } else 
        for (j=0; j<col;j++) {
            out.push(arr[a][j])
        }  
    } console.log(out.join(" "))
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
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
  