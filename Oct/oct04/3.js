function runProgram(input) {
    input = input.trim().split('\n')
    cases = +input[0].trim()

    line = 1;
    
    for(i=0; i<cases; i++){
        size = +input[line++].trim()
        arr = input[line++].trim().split(' ').map(Number)
        console.log(arr, size)

        out = 1

        a = []
        
        for(var i =0; i<size; i++){
            j=i+1
            res = -1
            for(var j= i+1; j<size;j++){
                if(arr[i] < arr[j]){
                    res = arr[j]
                    break
                }


                if(res!== -1){
                    res = -1
                    for(var k= j+1; k<size;k++){
                        if(res > arr[k]){
                            res = arr[k]
                            break
                        }
                    }
                }

            }
            a.push('1', res)


            
            out *=res
        }
        console.log(out)
        console.log(a)

    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    6
    5 1 6 2 5 1`);
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
  