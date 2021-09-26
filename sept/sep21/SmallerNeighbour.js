function runProgram(input) {
    input = input.trim().split('\n')
    n = +input[0].trim()
    arr = input[1].trim().split(' ').map(Number)

    s = []
    res = []

    for (var i = 0; i < n; i++) {
      while(s.length !== 0 && s[s.length-1]>=arr[i]){
        s.pop()
      }
      if(s.length == 0){
        res.push(-1)
        s.push(arr[i])
      } else {
        res.push(s[s.length-1])
        s.push(arr[i])
      }
    
    }
    console.log(res.join(" "))

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
  