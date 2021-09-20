function runProgram(input) {
    arr = input.trim().split('\n'); 
    n = Number(arr[0].trim())

    res = [];
    line = 1;
    //console.log(arr[line]);

    for (var i = 0; i < n; i++) {
      cases = arr[line].trim().split(' ').map(Number)
      // console.log(cases)
      if(cases[0]==1){
        res.push(cases[1])
      } else if(cases[0]==2){
        res.pop()
      } else if(res.length == 0){
        console.log('Empty!')
      } else console.log(res[res.length-1])
        line++
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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
  