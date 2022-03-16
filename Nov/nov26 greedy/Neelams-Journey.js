function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split(' ').map(Number)

    var sum = 0;
    var c = arr[0]
    for(let i=0; i< n; i++){
        if(arr[i] < c){
            c = arr[i]
        }
        sum += c
    }

    console.log(sum)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5
    4 7 8 3 4`);
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
  