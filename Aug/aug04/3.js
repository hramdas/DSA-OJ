function prime(i, j){
  for (var a=2; a < j-i; a++){
   if ((j-i) % a == 0){
     return false;
      break;
    } else return true;
  } 
} 

function runProgram(input) {
    input = input.trim().split("\n")
    N = Number(input[0])
    int = input[1].trim().split(" ").map(Number);
    //console.log(int)

    res = 0 
    for (var i = 0; i < N-1; i++) {
        for (var j = i+1; j < N; j++) {
          //console.log(prime(i, j))
           if (j-i == 2){
            res += Math.abs(int[j]-int[i])
           }
           else if ( prime(i, j) == true){
            console.log("ij - " + i, j)
             console.log(int[j], int[i])
             res += Math.abs(int[j]-int[i])
           }
        }
    } console.log(res)
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`12
    0 12 4 53 2 2 4 5 7 21 3 0`);
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
  