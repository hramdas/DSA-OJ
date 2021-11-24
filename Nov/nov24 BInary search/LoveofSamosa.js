function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    let n = cases[0]
    let k = cases[1]
    var arr = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b)

    let sum = 0;
    let count = 0;
    for(let i=0; i<n; i++){
        sum+=arr[i];
        if(sum <= k){
            count++
        } else {
            console.log(count);
            break;
        } 
       
    }
   

}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`4 10
    5 4 2 4`);
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
  