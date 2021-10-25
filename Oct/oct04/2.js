function runProgram(input) {
    input = input.trim().split('\n')
    cases = +input[0].trim()

    line = 1;
    for(var a = 0;a<cases;a++){
        n = +input[line++].trim()
        arr = input[line++].trim().split(' ')

        out = []
        out.push(1)
        // console.log(arr)
        for(var i = 1; i<=n; i++){
            count = 1
           
            for(var j = i-1; j>=0; j--) {
                if(arr[i] >= arr[j]){
                    count++
                } //else break
            }
            out.push(count)
        }
        console.log(out.join(' '))
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
  