function Optimise(arr){
    var a = arr[0]
    var b = arr[1]
    var c = arr[2]
    var k = arr[3]
    // console.log(A, B, C, k)
    var n = 0
    while(n < k-c){

        if(((a*n*n) + (b*n) + c) >= k){
            console.log('sum', (a*n*n + b*n + c), k)
            return n
        } else n++
        
        // console.log('els',n )

        // if(a*n*n + b*n + c < k){
        //     n++
        // }
    } return -1
}

function runProgram(input) {
    var input = input.trim().split('\n')
    var cases = +input[0].trim()
    // console.log(n, input[1])

    for( let i=1; i<=cases; i++){
        var arr = input[i].trim().split(' ').map(Number)

        console.log(Optimise(arr))
    }
    
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    58 93 59 60`);
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
  