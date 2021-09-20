function runProgram(input) {
    input = input.trim().split('\n');
    var cases = input[0].trim().split(' ').map(Number)

    n =cases[0]
    k = cases[1]
    arr = input[1].trim().split(' ').map(Number)

    for (var i = 0; i<n; i++) {
        for (var j =0;j<n; j++){
            if(arr[j]%k > arr[j+1]%k) {
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    } console.log(arr.join(' '))
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 6
    12 18 17 65 46`);
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
  