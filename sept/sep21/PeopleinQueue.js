function runProgram(input) {
    input = input.trim().split('\n')
 
    cases = input[0].trim().split(' ').map(Number)
    k = cases[0]
    q = cases[1]
    c = 0;

    arr= []

    for (var i = 1; i <=q; i++) {
        line = input[i].trim().split(' ').map(Number)

        if (line[0]==1){
            if(k>arr.length){
                arr.push(line[1])
                console.log(arr[arr.length-1])
            } else{
                console.log(-1)
            }
        } else {
            if(arr.length==0){
                console.log(-1)
            } else{
                console.log(arr.shift())
               
            }
        }
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
    2`);
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
  