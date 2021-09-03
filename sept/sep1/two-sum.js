function Twosum(arr, N, B){
    // console.log(arr, N, B)

    var l = 0;
    var r = N-1

    while(l < r) {
        if (arr[l] + arr[r] == B){
            console.log(l, r)
            break
        } else if(arr[l] + arr[r] < B){
            l++;
        } else if (arr[l] + arr[r] > B){
          r--
        }
    } //console.log(-1, -1)
    

}

function runProgram(input) {
    input = input.trim().split('\n'); 
    test = Number(input[0].trim())

    line =1;
    for (var i = 0; i <test; i++) {
        cases = input[line++].trim().split(' ').map(Number)
        N = +cases[0]
        B = +cases[1]
        arr = input[line++].trim().split(' ').map(Number)
        // console.log(arr,N,B)
    
        Twosum(arr, N, B)       
    }
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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
  