function runProgram(input) {
    input = input.trim().split('\n')
    n = +input[0].trim()

    line= 1;

    for (let i=0; i<n; i++) {
        size = +input[line++].trim();
        arr = input[line++].trim().split(' ').map(Number)

        // console.log(arr, size)
        // res = []
        // for (var a =0 ; a < size; a++){
        //     for(var j = a+1; j < size; j++) {
        //         if(arr[j] > arr[a]){
        //             res.push(arr[j])
        //             break;
        //         }
        //     } if(j == size){
        //         res.push(-1)
        //     }
        // }
        // console.log(res.join(' '))

        for(let i=1; i<n; i++){
            
        }
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
  