function runProgram(input) {
    input = input.trim().split("\n")
    N = input[0]
    var arr = input[1].trim().split(" ").map(Number)
    //console.log(arr)

        count = 0
    for (var i = 0; i < N; i++)
        if (arr[i-1] < arr[i] && arr[i] > arr[i+1])
        count++

        if (arr[0]>arr[1])
        count++

        if (arr[N-1] >arr[N-2])
        count++

    console.log(count++)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    3 2 3 4 2 1 6 5`);
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
  