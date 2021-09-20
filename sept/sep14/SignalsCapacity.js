function runProgram(input) {
    input = input.trim().split('\n'); 
    cases = Number(input[0].trim())

    line=1;

    for (let i=0; i<cases; i++) {
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)

        var res = []

        for(let i = 0; i<n; i++){
          count = 1;
          for(let j = i-1; j>=0; j--) {
            if(arr[j] < arr[i]){
              count++
              // console.log(arr[j], arr[i])
            } else break;
          }
          res.push(count)
            // console.log(count)
        }
        console.log(res.join(' '))
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
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
  