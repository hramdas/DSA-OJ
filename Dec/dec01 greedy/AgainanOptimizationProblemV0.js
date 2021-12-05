function runProgram(input) {
    input = input.trim().split('\n')
    var testcases = +input[0].trim()

    var line = 1;
    for(var i=0; i<testcases; i++){
        var cases = input[line++].trim().split(' ').map(Number)
        var s = cases[0]
        var n = cases[1]

        var arr = []
        for(let j= 0; j<n ;j++){
            var values = input[line++].trim().split(' ').map(Number)
            arr.push([values[0], values[1], values[1]/values[0]])
        }


        arr.sort((a,b)=> {
          return b[2]-a[2]}
        )
        var sum =0;


        for(let k=0; k<n; k++){
          //console.log(arr[k][1])

          if(s > 0){
            //console.log(arr[k][1])

            if(arr[k][0]<=s){
              sum += arr[k][1]
              s-= arr[k][0]
            }
          } else break;
        }

        console.log(sum)
    }
   
}
  
if (process.env.USERNAME === "hedga") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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
  