function runProgram(input) {
    input = input.trim().split('\n'); 
    cases = input[0].trim().split(' ')
    N = Number(cases[1])
    int = input[1].trim().split(' ').map(Number)
    //console.log(N)

    count = 0;
    for (var i = 0; i < int.length; i++){
        if (int[i]>0 && int[i] >= int[N-1]){
            //console.log(int[N])
            count++
            //console.log(int[i])
        } else {
            break
        }
    }
    console.log(count)
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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
  