function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = input[0].trim().split(' ').map(Number)
    let n = cases[0]
    let c = cases[1]
    let r = cases[2]
    let arr = input[1].trim().split(' ').map(Number).sort((a,b)=>a-b)

    let sum =0
    for(let i=0; i< c; i++){
        sum+=arr[i]
    }

    if(sum<=r){
        console.log('Party')
    } else console.log('Sad')
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`5 3 24
    6 4 21 20 13`);
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
  