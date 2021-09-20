function runProgram(input) {
    input = input.trim().split('\n'); 
    n = Number(input[0].trim())
    arr = input[1].trim().split(" ").map(Number)
    

    for (var i = 0; i <n-2; i++){
        for (var j = 0; j <n; j++) {
            if (arr[j]>arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
   console.log(arr.join(" "))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    3 5 0 9 8`);
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
  