function runProgram(input) {
    input = input.trim().split('\n')
    n = +input[0].trim()

    line= 1;

    for (let i=0; i<n; i++) {
        size = +input[line++].trim();
        arr = input[line++].trim().split(' ').map(Number)

        // console.log(arr, size)
        s = []
        res = []
        for (var a=size-1 ; a>=0; a--){
          while(s.length !==0 && arr[a] >= s[s.length-1]){
            s.pop()
          }
          if(s.length == 0){
            res.push(-1);
            s.push(arr[a])
          } else {
            res.push(s[s.length-1])
            s.push(arr[a])
          }
        }
        
        console.log(res.reverse().join(' '))
        
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4
    1 3 2 4`);
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
  