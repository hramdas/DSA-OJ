function runProgram(input) {
var input = input.trim().split("\n")
var N = Number(input[0])
var num = input[1].trim().split(" ").map(Number)
// var num = Number(num)

    var min = num[0]
    for (i=1; i<N; i++){
    if (min > num[i]){
        min = num[i]
    } else{
            min = min
        }  
    } console.log(min)

    var max = num[0]
    for (j=0; j<N; j++)
    if (max <= num[j]){
        max = num[j]
    } else {
        max = max;
    }
     console.log(max)
   
}     
    
    if (process.env.USERNAME === "hedga") {
      runProgram(`11
      55 -5 -8 2 0 9 4 5 6 9 1`);   // INPUT
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