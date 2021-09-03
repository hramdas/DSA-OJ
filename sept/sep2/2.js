function runProgram(input) {
    input = input.trim().split('\n'); 
    line = input[0].trim().split(' ').map(Number)
    n = line[0];
    k = line[1];
    arr = input[1].trim().split(' ').map(Number)

    count = 0
    for (var i = 0; i <n; i++) {
        for (var j = 0; j < n; j++) {
            if (i !== j && arr[i] + arr[j] == k){
                count++
               // console.log(arr[i], arr[j])
            }
        }
    }
    console.log(count/2)  
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 9
    3 0 6 2 7`);
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
  